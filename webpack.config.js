const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplatePug = require('html-webpack-template-pug');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'app'),
    dist: path.join(__dirname, 'dist'),
};

module.exports = {
    entry: PATHS.app,
    output: {
        filename: '[name].[chunkhash:8].js',
        path: PATHS.dist,
    },
    devtool: 'source-map',
    devServer: {
        // Enable history API fallback so HTML5 History API based
        // routing works. Good for complex setups.
        historyApiFallback: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',
    },
    module: {
        rules: [{
            test: /\.css$/,
            // include: [],
            use: ExtractTextPlugin.extract({
                use: 'css-loader',
            }),
        }],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            // Required
            inject: false,
            template: HtmlWebpackTemplatePug,

            // Optional
            appMountId: 'app',
        }),
        new CleanWebpackPlugin([PATHS.dist]),
    ],
};
