const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

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
        new CleanWebpackPlugin()
    ]
}