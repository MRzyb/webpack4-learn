const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)/,
                use:[
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 2} // 表示在一个 css 引入另一个css, 也会执行前两个 loader, 即postcss-loader sass-loader
                    },
                    {
                        loader: 'postcss-loader',
                        options:{
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
                removeComments: true, // 移除 HTML 中的注释
                collapseWhitespace: false, // 是否删除空白行与换行符
                minifyCSS: true // 压缩内联css
            },
            template: 'index.html', // 根据模板生成 HTML 文件
            filename: 'main.html' // 生成的文件名
        }),
        new CleanWebpackPlugin()
    ]

}