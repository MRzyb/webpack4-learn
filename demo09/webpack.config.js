const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 开启 Tree Shaking 告诉webpack导出已使用的模块 production 模式默认开启
    // optimization: {
    //   usedExports: true
    // },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeComments: true, // 移除 html 中的注释
                collapseWhitespace: true, // 删除空白与换行符
                minifyCSS: true // 压缩 内联 css
            },
            template: 'index.html',
            pathname: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
    
}