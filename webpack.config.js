console.log(__dirname)
const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        
        }],
    },
    devtool: 'eval-cheap-module-source-map'

}