module.exports = {
    entry: './src/index.js',
 
    output: {
        path: __dirname + '/public/',
        filename: '4h-team.js'
    },
 
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/',
        proxy: {
            "*": "http://localhost:8080"
        },
    },
 
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },

    devtool: '#inline-source-map' // debugging을 위한 것임.
};