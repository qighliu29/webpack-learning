const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BabelWebpackPlugin = require('babel-minify-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
};

const commonConfig = {
    entry: {
        main: ['bootstrap-loader/extractStyles', PATHS.src],
        vendor: ['jquery', 'bootstrap-sass'],
    },
    output: {
        filename: '[name].[chunkhash:8].js',
        path: PATHS.dist,
    },
    module: {
        rules: [{
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'url-loader?limit=10000',
        },
        {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            use: 'file-loader',
        },
        {
            test: /bootstrap-sass\/assets\/javascripts\//,
            use: 'imports-loader?jQuery=jquery',
        },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            // Required
            inject: false,
            template: require('html-webpack-template-pug'), // eslint-disable-line global-require

            // Optional
            appMountId: 'app',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new StyleLintPlugin({
            context: path.join(PATHS.src, 'assets/style'),
            failOnError: true,
            quiet: false,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
        alias: {
            bootswatch: path.join(PATHS.src, 'third/bootswatch'),
        },
    },
};

const developmentConfig = merge([
    commonConfig,
    {
        devtool: 'source-map',
        devServer: {
            // Enable history API fallback so HTML5 History API based
            // routing works. Good for complex setups.
            historyApiFallback: true,

            // Display only errors to reduce the amount of output.
            stats: 'errors-only',
        },
    },
]);

const productionConfig = merge([
    commonConfig,
    {
        plugins: [
            new CleanWebpackPlugin([PATHS.dist]),
            new BabelWebpackPlugin(),
        ],
    },
]);

module.exports = env => (env === 'production' ? productionConfig : developmentConfig);
