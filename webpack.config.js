const path = require('path');

module.exports = {
    entry: './frontend/js/index.jsx',
    output: {
        path: path.resolve(__dirname, 'web/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /.(js|jsx)$/,
            exclude: /node-modules/,
            use: ['babel-loader'],
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};