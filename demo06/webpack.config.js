const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 将css单独提取到文件中的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

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
                    {loader: MiniCssExtractPlugin.loader},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
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
            filename: '[name].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'), // 用于优化/最小化 css 的css处理器， 默认为 cssnanno
            cssProcessorOptions: {preset: ['default', {discardComments: {removeAll: true}}]}, //传递给 cssProcessor 的选项，默认为{}
            canPrint: true // 布尔值，指示插件是否可以将消息打印到控制台，默认为 true
        })
    ]
}