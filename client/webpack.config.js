module.exports = {
    entry: './src/index.js',
 
    output: {
        path: __dirname + '/public/',
        filename: '4h-team.js'
    },
 
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
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
            }
        ]
    },

    devtool: '#inline-source-map' // debugging을 위한 것임.
};