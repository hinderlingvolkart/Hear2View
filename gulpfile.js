var gulp = require('gulp'),
    gulpFilter = require('gulp-filter'),
    gulpIf = require('gulp-if'),
    artoo = require('gulp-artoo'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver'),
    concat = require('gulp-concat'),
    replace = require('gulp-replace'),
    uglify = require('gulp-uglify'),
    order = require("gulp-order"),
    debug = require('gulp-debug'),
    fs = require('fs');

// Files to aggregate
var files = [
  './templates/*.tpl',
  './stylesheets/*.scss',
  './stylesheets/*.css',
  './src/*.js'
];

function htmlBuild(mode) {
  return gulp.src('src/bookmarklet.html')
    .pipe(replace('{{bookmarklet}}', function(s) {
        var script = fs.readFileSync('build/hear2view.bookmark.' + mode + '.js', 'utf8');
        return 'javascript:' + encodeURIComponent(script);
    }))
    .pipe(rename('bookmarklet.' + mode + '.html'))
    .pipe(gulp.dest('./build'));
}
gulp.task('html:prod', ['bookmark.dev', 'bookmark.prod'], function() {
  return htmlBuild('prod');
});
gulp.task('html:dev', ['bookmark.dev', 'bookmark.prod'], function() {
  return htmlBuild('dev');
});
gulp.task('readme', ['bookmark.dev', 'bookmark.prod'], function() {
  return gulp.src('src/bookmarklet.html')
    .pipe(replace('{{bookmarklet}}', function(s) {
        var script = fs.readFileSync('build/hear2view.bookmark.prod.js', 'utf8');
        return 'javascript:' + encodeURIComponent(script);
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});
gulp.task('html', ['html:prod', 'html:dev', 'readme']);



// Build
function preBuild() {
  var tplFilter = gulpFilter('**/*.tpl', {restore: true});
  var scssFilter = gulpFilter('**/*.scss', {restore: true});
  var cssFilter = gulpFilter('**/*.css', {restore: true});
  return gulp.src(files)
    .pipe(tplFilter)
    .pipe(artoo.template())
    .pipe(tplFilter.restore)

    .pipe(scssFilter)
    .pipe(gulpIf('*.scss', sass()))
    .pipe(scssFilter.restore)

    .pipe(cssFilter)
    .pipe(gulpIf('*.css', autoprefixer()))
    .pipe(gulpIf('*.css', artoo.stylesheet()))
    .pipe(cssFilter.restore)

    .pipe(order(['**/*.css', 'src/*.js']))
    .pipe(concat('hear2view.concat.js'));
}

gulp.task('compile', function() {
  return preBuild()
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['compile', 'html']);

// Bookmarklets
gulp.task('bookmark.dev', function() {
  return artoo.blank('hear2view.bookmark.dev.js')
    .pipe(artoo({
      random: true,
      loadingText: null,
      settings: {
        reExec: false,
        scriptUrl: 'http://localhost/hv/HV-Dev/Accessibility/Hear2View/build/hear2view.concat.js',
        env: 'dev'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('bookmark.prod', function() {
  return preBuild()
    .pipe(uglify())
    .pipe(rename('hear2view.bookmark.prod.js'))
    .pipe(artoo({
      settings: {
        reExec: false
      }
    }))
    .pipe(gulp.dest('./build'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch(files, ['compile']);
});

// Server
gulp.task('serve', function() {
  gulp.src('./')
    .pipe(webserver({
      directoryListing: true,
      port: 8000,
      https: true
    }));
});

// Macro tasks
gulp.task('work', ['build', 'watch', 'serve']);
gulp.task('bookmarklets', ['bookmark.dev', 'bookmark.prod']);
gulp.task('default', ['build', 'bookmark.dev', 'bookmark.prod']);
