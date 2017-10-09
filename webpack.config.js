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
    test: path.join(__dirname, 'test'),
};

const commonConfig = {
    entry: {
        main: PATHS.src,
        bootstrap: 'bootstrap-loader/extractStyles',
        vendor: ['jquery', 'bootstrap-sass'],
    },
    output: {
        filename: '[name].[chunkhash:8].js',
        path: PATHS.dist,
    },
    module: {
        rules: [{
            test: /\.(js|vue)$/,
            enforce: 'pre',
            include: [PATHS.src, PATHS.test],
            use: {
                loader: 'eslint-loader',
                options: {
                    formatter: require('eslint-friendly-formatter'), // eslint-disable-line global-require
                },
            },
        },
        {
            test: /stylesheet.scss$/,
            include: path.join(PATHS.src, 'assets/style'),
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader',
                }],
                fallback: 'style-loader',
            }),
        },
        {
            test: /\.vue$/,
            use: {
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: [
                            'vue-style-loader',
                            'css-loader',
                            'postcss-loader',
                            'sass-loader',
                            {
                                loader: 'sass-resources-loader',
                                options: {
                                    resources: path.join(PATHS.src, 'assets/style/resources.scss'),
                                    // resources: ['./path/to/vars.scss', './path/to/mixins.scss'],
                                },
                            },
                        ],
                    },
                },
            },
        },
        {
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
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            // Required
            inject: false,
            template: require('html-webpack-template-pug'), // eslint-disable-line global-require

            // Optional
            appMountId: 'app',

            injectExtras: {
                head: [
                    'https://use.fontawesome.com/39cc1dc769.js',
                ],
            },
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
        extensions: ['.js', '.json', '.jsx', '.vue', '.css', '.scss'],
        alias: {
            bootswatch: path.join(PATHS.src, 'third/bootswatch'),
            vue$: 'vue/dist/vue.runtime.esm.js',
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

// this helps vue drop the development-only code
const nodeEnvConfig = env => ({
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env),
            },
        }),
    ],
});

module.exports = env => merge([(env === 'production' ? productionConfig : developmentConfig)].concat(nodeEnvConfig(env)));
