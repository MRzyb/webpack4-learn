const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve('../dist'),
        port: 9000,
        hot: true,
        overlay: true,
        proxy: {
            '/comments': {
                changeOrigin: true,
                logLevel: 'debug',
                headers: {
                    Cookie: ''
                }
            }
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin() // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
    ]
}
