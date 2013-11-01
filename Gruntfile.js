
var path = require('path');

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
        },
        express: {
            all: {
                options: {
                    bases: path.resolve('./'),
                    livereload: true
                }
            }
        },
        watch: {
            all: {
                files: ['**/*.js', '**/*.less'],
                tasks: ['less', 'autoprefixer'],
                options: {
                    livereload: true
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:3000/demo.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin']);
    grunt.registerTask('server', ['less', 'autoprefixer', 'cssmin', 'express', 'open', 'watch']);
};