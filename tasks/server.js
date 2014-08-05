/* Usage: `$ grunt server` or `$ grunt server:dist` or `$ grunt server:stubbed:watch` */
module.exports = function (grunt) {
    grunt.registerTask('server',
        'Runs app in development mode. Options: "server", "server:dist", "server:stubbed:watch", "server:stubbed:watch:open"',
        function(target, watch, open) {
            var commonTasks = [
                'clean',
                'connect:livereload',
            ];

            if (target === 'dist') {
                return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
            } else if (target === 'stubbed') {
                commonTasks.unshift('stubby');
                commonTasks.pop();
                // commonTasks.push('configureProxies:mocked');
                if (watch === 'watch' || watch === 'true') {
                    commonTasks.push('watch');
                }
                if (open === 'open' || open === 'true') {
                    commonTasks.push('open');
                }
            } else {
                commonTasks.push('open');
                commonTasks.push('watch');
            }
            grunt.task.run(commonTasks);
        });
};
