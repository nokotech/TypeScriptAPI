module.exports = {
    entry: [
        './src/app.ts'
    ],
    output: {
        filename: './dest/bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.ts', ".js"]
    },
    module: {
        loaders: [{
            test: /\.ts(x?)$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    }
};