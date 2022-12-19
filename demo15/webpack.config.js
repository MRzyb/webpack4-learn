const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                resourceQuery: /raw/,
                type: 'asset/source',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.ejs'
        })
    ]
}