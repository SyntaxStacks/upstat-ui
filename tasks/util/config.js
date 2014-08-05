var appName = 'template', appLocalRewrite = {};
appLocalRewrite['/' + appName] = '';

module.exports = {
    app: 'app',
    dist : 'dist',
    ngdocs: 'ngdocs',
    appName: appName,
    appDest: 'dist/' + appName,
    open: {
        hostname: 'localhost',
        port: 9000
    },
    liveReloadPage: require('connect-livereload')({ port: 35729 }),
    proxyRequest: require('grunt-connect-proxy/lib/utils').proxyRequest,
    modRewrite: require('connect-modrewrite'),
    mountFolder : function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    },
    mockedProxies: [],
    defaultProxies: [
        {
            context: '/' + appName,
            host: 'localhost',
            port: 9000,
            rewrite: appLocalRewrite
        },
        { // Default catch all for all stubbed out API's
            context: '/api',
            host: 'localhost',
            port: 3000,
            https: false,
            changeOrigin: false
        }
    ]
};
