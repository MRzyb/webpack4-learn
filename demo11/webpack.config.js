const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(jpg|gif|jpeg|png)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images', // 文件输出目录
                        limit: 10240, // 小于 10kb 的打包成base64
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader // 把 style-loader 换成了 MiniCssExatractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeComments: true, // 删除 html 中的注释
                collapseWhitespace: true, // 删除空白与换行符
                minifyCSS: true, // 压缩 内联css
            },
            filename: 'index.html',
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'), // 用于优化/最小化 css 的css处理器， 默认为 cssnanno
            cssProcessorOptions: {preset: ['default', {discardComments: {removeAll: true}}]}, //传递给 cssProcessor 的选项，默认为{}
            canPrint: true // 布尔值，指示插件是否可以将消息打印到控制台，默认为 true
        })
    ]
}