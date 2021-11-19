const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    const { minify } = require("terser");
    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function(
        code,
        callback
    ) {
        try {
            const minified = await minify(code);
            callback(null, minified.code);
        } catch (err) {
            console.error("Terser error: ", err);
            // Fail gracefully.
            callback(null, code);
        }
    });

    eleventyConfig.addFilter('markdown', function(value) {
        let markdown = require('markdown-it')({
            html: true
        });
        return markdown.render(value);
    });

    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/src");

    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("bin");
    eleventyConfig.addPassthroughCopy("config");
    eleventyConfig.addPassthroughCopy("web");

    eleventyConfig.addPassthroughCopy(".checkstyle");
    eleventyConfig.addPassthroughCopy(".classpath");
    eleventyConfig.addPassthroughCopy(".project");
    eleventyConfig.addPassthroughCopy("configuration-en.xls");
    eleventyConfig.addPassthroughCopy("configuration-zh.xls");


    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/css/");

    eleventyConfig.addCollection('about', collection => {
        return collection.getFilteredByGlob('src/pages/*.md');
    });

    return {
        templateFormats: ['html', 'njk', 'md'],
        dir: {
            input: 'src',
            output: '_site'
        }
    }
}