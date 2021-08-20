
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("admin");

    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/css/");

    eleventyConfig.addCollection('about', collection => {
        return collection.getFilteredByGlob('src/pages/*.md');
    });

    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    }
}