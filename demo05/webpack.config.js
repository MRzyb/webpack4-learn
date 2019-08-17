const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '自动生成 HTML', // 用于生成的HTML文档的标题, template不在的时候生效
      minify: {
        // 压缩 html 文件
        removeComments: true, // 移出 HTML 的注释
        collapseWhitespace: false, // 是否删除空白符与换行符
        minifyCSS: true // 压缩csss
      },
      filename: 'index.html', // 生成的文件名
      template: 'index.html' // 根据此模板生成 HTML 文件
    }),
    new CleanWebpackPlugin()
  ]

}