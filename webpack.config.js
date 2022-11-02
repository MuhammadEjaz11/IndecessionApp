console.log(__dirname)
const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    }
}