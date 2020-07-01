const gulp = require('gulp');
const del = require('del');
const terser = require('gulp-terser');
const concat = require('gulp-concat'); 
const imagemin = require('gulp-imagemin'); 
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename'); 
const jsonminify = require('gulp-jsonminify');
const copy = require('gulp-copy');

const paths = {
  styles: {
    src: 'src/css/**/*.css',
    dest: 'docs/css'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'docs/scripts'
  },
  html: {
    src: 'src/index-prod.html',
    dest: 'docs/'
  }, 
  images: {
    src: 'src/images/**/*',
    dest: 'docs/images'
  }, 
  config: {
    src: 'src/config/**/*',
    dest: 'docs/config/'
  }, 
  sounds: {
    src: 'src/sounds/**/*',
    dest: 'docs/'
  } 
}

function clean() {
  return del(['docs/**/*']);
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(terser())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest)); 
}

function html() {
  return gulp.src(paths.html.src, { sourcemaps: true } )
  .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
  .pipe(rename('index.html'))
  .pipe(gulp.dest(paths.html.dest));
}

function image() {
  return gulp.src(paths.images.src)
  .pipe(imagemin())
  .pipe(gulp.dest(paths.images.dest));
}

function css() {
  return gulp.src(paths.styles.src, { sourcemaps: true })
  .pipe(cleanCSS(), { compatibility: 'ie8' })
  .pipe(concat('main.min.css'))
  .pipe(gulp.dest(paths.styles.dest));
}

function config() {
  return gulp.src(paths.config.src)
  .pipe(jsonminify())
  .pipe(gulp.dest(paths.config.dest));
}

function sounds() {
  return gulp.src(paths.sounds.src, { sourcemaps: true })
  .pipe(copy(paths.sounds.dest, { prefix: 1}))
}

const build = gulp.series(clean, gulp.parallel(scripts, html, image, css, config, sounds)); 

exports.default = build; 