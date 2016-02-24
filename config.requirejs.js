/*eslint-disable */
requirejs.config({
    baseUrl: '/dist',
    paths: {
        lodash: '/node_modules/lodash/index',
        jquery: '/node_modules/jquery/dist/jquery',
        React: '/node_modules/react/dist/react-with-addons',
        'Wix': '/lib/Wix-sdk/Wix',
        'UI': '/lib/editor-ui-lib/editor-ui-lib'
    },
    map: {
        '*': {
            'react/addons': 'React',
            '$': 'jquery',
            '_': 'lodash'
        }
    },
    shim: {
        Wix: {exports: 'Wix'}
    }
});
