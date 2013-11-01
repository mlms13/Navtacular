module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            options: {
                strictMath: true,
                strictUnits: true
            },
            build: {
                files: {
                    "css/navbar.css": "less/navbar.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};