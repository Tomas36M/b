// webpack.config.js
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(pdf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/files/', // Adjust the path as needed
                            publicPath: '/_next/static/files/', // Adjust the path as needed
                        },
                    },
                ],
            },
        ],
    },
};