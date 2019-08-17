const path = require('path')

module.exports = {
  mode: 'development', // 设置模式 development production
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js', // 代码打包后的文件名
    path: path.resolve(__dirname, 'dist') // 打包文件的输出目录
  },
  module: {
    rules: [{
      test: /\.jpg$/, // 针对.jpg后缀的文件设置loader
      use: { // 使用loader
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/', // 文件的输出目录
          limit: 1000 // 把小于 100kb 的图片转为 base64
        }
      }
    }]
  }
}