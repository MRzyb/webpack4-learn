const path = require('path')

console.log('__dirname:', __dirname)
console.log('path.resolve:', path.resolve(__dirname, 'dist'))

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js',  // 打包后的js文件
        path: path.resolve(__dirname, 'dist')   // 打包文件输出目录
    }
}