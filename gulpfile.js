var gulp = require('gulp');

gulp.task('less', function() {
    var less = require('gulp-less'),
        autoprefixer = require('gulp-autoprefixer');

    return gulp.src('./less/navbar.less')
        .pipe(less({ paths: ['./less/*.less'] }))
        .pipe(autoprefixer('> 1%', 'last 2 versions', 'ie 8', 'ie 7'))
        .pipe(gulp.dest('./css'));
});

gulp.task('lint', function () {
    var jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish');

    return gulp.src('./scripts/navbar.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('server', function () {
    var path = require('path'),
        express = require('express'),
        app = express(),
        open = require('open');

    app.use(express.static(path.join(__dirname, '/')));
    app.listen(4321, function () {
        console.log('Static web server running on port 4321');
    });
    open('http://localhost:4321/demo.html');
});

gulp.task('watch', ['default', 'server'], function () {
    var lr = require('gulp-livereload'),
        server = lr();

    gulp.watch('less/**', ['less']);
    gulp.watch('scripts/**', ['lint']);
    gulp.watch(['css/**', 'scripts/**', '*.html']).on('change', function (file) {
        server.changed(file.path);
    });
});

gulp.task('default', ['less', 'lint']);