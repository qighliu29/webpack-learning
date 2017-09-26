const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplatePug = require('html-webpack-template-pug');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const stylelint = require('stylelint');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
};

module.exports = {
    entry: PATHS.src,
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
        rules: [
            // {
            //     test: /\.(css|scss)$/,
            //     include: path.join(PATHS.src, 'assets/style'),
            //     enforce: 'pre',
            //     use: {
            //         loader: 'postcss-loader',
            //         options: {
            //             plugins: () => ([
            //                 stylelint(),
            //             ]),
            //         },
            //     },
            // },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => ([
                                    precss,
                                    autoprefixer,
                                ]),
                            },
                        },
                        'sass-loader',
                    ],
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
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        }),
    ],
};
