const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 将css单独提取到文件中的插件

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeComments: true, // 移出 html 中的注释
                collapseWhitespace: false, //删除空白与换行符
                minifyCSS: true // 压缩 内联 css
            },
            filename: 'index.html',
            template: 'index.html'
        }),
        new CleanWebpackPlugin(), //打包的时候先删除原先的dist目录
        new MiniCssExtractPlugin({
            filename: '[name].[ext]'
        })
    ]
}