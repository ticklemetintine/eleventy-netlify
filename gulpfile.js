var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var order = require('gulp-order');

var serverConfig = {
    site: './web',
    pack: './_site',
    ssi: '.html',
    index: 'index.html'
};

var mergeStream = require("merge-stream");


/* minify common javascript files that have not been named as minified already */
gulp.task('min-js', function() {
    var commons = gulp.src(['web/scripts/common/*.js'])
        .pipe(sourcemaps.init())
        .pipe(order([
            "web/scripts/common/utils.js",
            "web/scripts/common/main.js",
            "web/scripts/common/sitemaps-eng-zh.js",
            "web/scripts/common/menu.js",
            "web/scripts/common/*.js"
        ], { base: './' }))
        .pipe(concat("all.min.js"))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('web/scripts'));
    var footer = gulp.src(['web/scripts/common/footer.js'])
        .pipe(concat("footer.min.js"))

    .pipe(gulp.dest('web/scripts'));
    var vendors = gulp.src(['web/scripts/vendors/blacksunplc-115258.min.js',
            'web/scripts/vendors/jquery-3.5.1.min.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat("vendors.min.js"))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('web/scripts'));
    var vendorsDefer = gulp.src(['web/scripts/vendors/*.js',
            '!web/scripts/vendors/blacksunplc-115258.min.js',
            '!web/scripts/vendors/jquery-3.5.1.min.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat("vendors-defer.min.js"))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('web/scripts'));
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

gulp.task('serve', function() {
    gulp.watch(["web/scripts/vendors/*.js", "web/scripts/common/*.js"]).on("change", gulp.series('min-js'));
});

/* Task when running `gulp` from terminal */
gulp.task('default', gulp.series('min-js', gulp.parallel('serve')));