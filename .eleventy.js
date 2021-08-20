
module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('markdown', function(value) {
        let markdown = require('markdown-it')({
            html: true
        });
        return markdown.render(value);
    });

    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("admin");

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