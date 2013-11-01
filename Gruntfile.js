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
        },
        autoprefixer: {
            options: {
                browsers: ['> 1%', 'last 2 versions', 'ie 8', 'ie 7']
            },
            build: {
                files: {
                    "css/navbar.css": "css/navbar.css"
                }
            }
        },
        cssmin: {
            options: {
                report: "gzip"
            },
            build: {
                files: {
                    "css/navbar.min.css": "css/navbar.css"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin']);
};