var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var order = require('gulp-order');

var serverConfig = {
    site: './src',
    pack: './_site',
    ssi: '.html',
    index: 'index.html'
};

var mergeStream = require("merge-stream");


/* minify common javascript files that have not been named as minified already */
gulp.task('min-js', function() {
    var commons = gulp.src(['./src/scripts/common/*.js'])
        .pipe(sourcemaps.init())
        .pipe(order([
            "_site/scripts/common/utils.js",
            "_site/scripts/common/main.js",
            "_site/scripts/common/sitemaps-eng-zh.js",
            "_site/scripts/common/*.js"
        ], { base: './' }))
        .pipe(concat("all.min.js"))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./src/scripts'));
    var footer = gulp.src(['./src/scripts/common/footer.js'])
        .pipe(concat("footer.min.js"))
        .pipe(gulp.dest('./src/scripts'));
    var vendors = gulp.src(['./src/scripts/vendors/blacksunplc-115258.min.js',
            './src/scripts/vendors/jquery-3.5.1.min.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat("vendors.min.js"))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./src/scripts'));
    var vendorsDefer = gulp.src(['./src/scripts/vendors/*.js',
            '!./src/scripts/vendors/blacksunplc-115258.min.js',
            '!./src/scripts/vendors/jquery-3.5.1.min.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat("vendors-defer.min.js"))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./src/scripts'));
    return mergeStream(commons, footer, vendors, vendorsDefer);
});

/* minify and dist javascript files that have not been named as minified already */
gulp.task('dist-others', function() {
    var mini = gulp.src(['_site/scripts/**/*.js', '!_site/scripts/common/*.js', '!_site/scripts/vendors/*.js', '!_site/scripts/*.min.js'])
        .pipe(gulp.dest('./_site/scripts'));
    var copy = gulp.src(['_site/scripts/*.min.js'])
        .pipe(gulp.dest('./_site/scripts'));
    return mergeStream(mini, copy);
});

/* minify and dist to proper locations all JS resources */
gulp.task('dist-js', gulp.series('min-js', 'dist-others'));


/* Task when running `gulp` from terminal */
gulp.task('default', gulp.series('min-js'));