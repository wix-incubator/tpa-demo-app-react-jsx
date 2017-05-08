var path = require('path');
var webpack = require('webpack');

var getPlugins = function() {
    var plugins = [];
    var hotReload = new webpack.HotModuleReplacementPlugin()
    var noErrorsPlugin = new webpack.NoErrorsPlugin();
    var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    });

    plugins.push(noErrorsPlugin);
    if (process.argv.indexOf('prod') > -1) {
        plugins.push(uglifyPlugin)
    } else {
        plugins.push(hotReload)
    }

    return plugins;
};

var webpackConfig = {
    entry: {
        settings: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            __dirname + '/src/settings/App'
            ],
        widget: __dirname + '/src/widget/widget_main'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        sourceMapFilename: "debugging/[file].map",
        filename: '[name].js'
    },
    plugins: getPlugins(),
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        lodash: '_',
        jquery: '$',
        Wix: 'Wix',
        'editor-ui-lib': 'UI'
    },
    devtool: 'eval',
    module: {
        loaders: [
            {test: /\.js?$/, loaders: ['babel-loader?presets[]=es2015&presets[]=react', 'react-hot'], include: path.join(__dirname, 'src')},
            {test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader'},
            {test: /\.rt/, loader: "react-templates-loader"},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader?functions=selector-parse&root=" + path.resolve('./js')}
        ]
    }
};

module.exports =  webpackConfig;
