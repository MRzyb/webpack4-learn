const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
        filename: '[name].bundle.js',     // 代码打包后的文件名
        chunkFilename: '[name].js' // 代码拆分后的文件名
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // 分割所有代码
            cacheGroups: {
                vendors: {
                    name: 'vendors'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeComments: true, // 删除 html 中的注释
                collapseWhitespace: false, // 不删除空白与换行符
                minifyCSS: true // 压缩 内联 css
            },
            filename: 'index.html',
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
}