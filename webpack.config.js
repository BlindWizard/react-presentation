const path = require('path');

module.exports = {
    entry: './frontend/js/index.js',
    output: {
        path: path.resolve(__dirname, 'web/js'),
        filename: 'bundle.js'
    }
};