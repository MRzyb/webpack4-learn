const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // devtool: 'source-map',
    devServer: {
        // 告诉服务器从哪里提供内容，只有你在想要提供静态文件的时候才需要。
        // 默认情况下，将使用当前工作目录作为提供内容的目录
        contentBase: './dist',
        port: 9000, // 指定要监听请求的端口号
        open: true, // 服务启动时会自动打开浏览器
        hot: true, // 启用 webpack 的模块热替换特性（HMR） （热重载）
        overlay: true // 当存在编译错误的时候，在浏览器显示全屏覆盖
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}