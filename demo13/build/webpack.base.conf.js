const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const productionConfig = require('./webpack.prod.conf')
const developmentConfig = require('./webpack.dev.conf')

const baseConfig = {} // ...省略

/**
 * @description 根據不同的环境，生成不同的配置
 * @param env {String} "development" or "production"
 */
const generateConfig = env => {
    // 将需要的 Loader 和 Plugin 单独声明
    
    let scriptLoader = [
        {
            loader: 'babel-loader'
        }
    ]
    
    let cssLoader = [
        'style-loader',
        'css-loader',
        'postcss-loader', // 使用 postcss 为 css 加上浏览器前缀
        'sass-loader'
    ]
    
    let cssExtractLoader = [
        {
            loader: MiniCssExtractPlugin.loader
        },
        'css-loader',
        'postcss-loader', // 使用 postcss 为 css 加上浏览器前缀
        'sass-loader'
    ]
    
    let fontLoader = [
        {
            loader: 'url-loader',
            options: {
                name: '[name]-[hash:5].min.[ext]',
                limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                publicPath: 'fonts/',
                outputPath: 'fonts/'
            }
        }
    ]
    
    let imageLoader = [
        {
            loader: 'url-loader',
            options: {
                name: '[name]-[hash:5].min.[ext]',
                limit: 10000, // size <= 10KB
                outputPath: 'images/'
            }
        },
        // 图片压缩
        {
            loader: 'image-webpack-loader',
            options: {
                // 压缩 jpg/jpeg 图片
                mozjpeg: {
                    progressive: true,
                    quality: 50 // 压缩率
                },
                // 压缩 png 图片
                pngquant: {
                    quality: '65-90',
                    speed: 4
                }
            }
        }
    ]
    
    let styleLoader = env === 'production'
        ? cssExtractLoader // 生产环境下压缩css代码
        : cssLoader // 开发环境：页内样式嵌入
    
    return {
        entry: {main: './src/index.js'},
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].[hash:5].bundle.js',
            chunkFilename: '[name].[hash:5].chunk.js'
        },
        module: {
            rules: [
                {test: /\.js$/, exclude: /(node_modules)/, ues: scriptLoader},
                {test: /\.(sa|sc|c)ss$/, use: styleLoader},
                {test: /\.(eto|woff|ttf|svg)$/, use: fontLoader},
                {test: /\.(png|jpg|jpeg|gif)$/, use: imageLoader}
            ]
        },
        plugins: [
            // 开发环境和生产环境二者均需要的插件
            new HtmlWebpackPlugin({
                title: 'webpack4实战',
                filename: 'index.html',
                template: path.resolve(__dirname, '../index.html'),
                minify: {
                    collapseWhitespace: true // 删除空白符与换行符
                }
            }),
            new CleanWebpackPlugin(),
            new webpack.ProvidePlugin({$: 'jquery'})
        ]
    }
}


module.exports = env => {
    let config = env === 'production' ? productionConfig : developmentConfig
    return merge(generateConfig(env), config)  // 合并 公共配置 和 环境配置
}