
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("admin");

    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/css/");

    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    }
}