var path = require('path');
var webpack = require('webpack');
var rimraf = require('rimraf');

var getPlugins = function() {
    var plugins = [];
    var hotReload = new webpack.HotModuleReplacementPlugin();
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


    var
      fbLocale = 'en',
      localesFormatted,
      localesFormattedShort,
      rexLocales,
      rexLocalesShort,
      localesRaw = process.env.WIX_TPA_LOCALES;

    // add locale fallback
    if (!localesRaw) {
      localesRaw = fbLocale;
    } else if (localesRaw.indexOf(fbLocale) < 0) {
      localesRaw += ','+fbLocale;
      console.log(`'${fbLocale}' locale automatically added to support a fallback`);
    }

    localesFormatted = localesRaw.replace(/[\s,]+/g, '|');
    localesFormattedShort = localesFormatted.replace(/-[a-z]{2}/gi, '');
    rexLocales = new RegExp('^\.\/('+localesFormatted+')\\.');
    rexLocalesShort = new RegExp('^\.\/('+localesFormattedShort+')');

    plugins.push(new webpack.ContextReplacementPlugin(
      /node_modules\/intl\/locale-data\/jsonp/,
      rexLocales
    ));

    plugins.push(new webpack.ContextReplacementPlugin(
      /node_modules\/react-intl\/locale-data/,
      rexLocalesShort
    ));

    plugins.push(new webpack.ContextReplacementPlugin(
      /src\/(.*)\/lang/,
      rexLocales
    ));

    plugins.push({
      apply: (compiler) => {
        rimraf.sync(compiler.options.output.path);
      }
    });

    return plugins;
};

var webpackConfig = {
    entry: {
        settings: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            __dirname + '/src/settings/App'
            ],
        widget: [
          'webpack-dev-server/client?http://localhost:3000',
          'webpack/hot/only-dev-server',
          __dirname + '/src/widget/widget_main'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
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
            {test: /\.json$/, loader: 'json-loader'},
            {
              test: /\.(gif|png|jpg|jpeg|svg|eot|woff2|woff|ttf)$/,
              loader: 'file?name=assets/[hash:7].[ext]'
            },
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader?functions=selector-parse&root=" + path.resolve('./js')}
        ]
    }
};

module.exports =  webpackConfig;
