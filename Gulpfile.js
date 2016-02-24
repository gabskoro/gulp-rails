var gulp, sass, livereload, concat, uglify, rev;

gulp       = require('gulp');
sass       = require('gulp-sass');
livereload = require('gulp-livereload');
concat     = require('gulp-concat');
uglify     = require('gulp-uglify');
rev        = require('gulp-rev');

gulp.task('default', ['compile-scss', 'compile-js']);

gulp.task('compile-scss', function() {
  gulp.src('app/assets/stylesheets/**/*.scss')
      .pipe(sass({ indentedSyntax: false, errLogToConsole: true }))
      // .pipe(rev())
      .pipe(gulp.dest('public/assets'))
      // .pipe(rev.manifest())
      // .pipe(gulp.dest('public/assets'))
      .pipe(livereload());
});

gulp.task('compile-js', function() {
  gulp.src('app/assets/javascripts/**/*.js')
      .pipe(gulp.dest('public/assets'))
      .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen({reloadPage: 'app/views/layouts/application.html'});
  gulp.watch('app/assets/stylesheets/**/*.scss', ['compile-scss']);
  gulp.watch('app/assets/javascripts/**/*.js', ['compile-js']);
});
