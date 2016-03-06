var path = require('path');
var webpack = require('webpack');

var getPlugins = function() {
    var plugins = [];
    var noErrorsPlugin = new webpack.NoErrorsPlugin();
    var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    });

    plugins.push(noErrorsPlugin);
    if (process.argv.indexOf('prd') > -1) {
        plugins.push(uglifyPlugin)
    }

    return plugins;
};

var webpackConfig = {
    entry: {
        settings: __dirname + '/src/settings/settings_main',
        widget: __dirname + '/src/widget/widget_main'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: getPlugins(),
    externals: {
        react: 'React',
        'react/addons': 'React',
        lodash: '_',
        jquery: '$',
        angular: 'angular',
        Wix: 'Wix',
        'editor-ui-lib': 'UI'
    },
    module: {
        loaders: [
            {test: /\.js?$/, loader: 'babel', include: path.join(__dirname, 'src')},
            {test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader'},
            {test: /\.rt/, loader: "react-templates-loader"},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader?functions=selector-parse&root=" + path.resolve('./js')}
        ]
    }
};

module.exports =  webpackConfig;
