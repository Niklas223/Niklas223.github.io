module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles");
  
    eleventyConfig.addCollection("posts", function(collectionApi) {
      return collectionApi.getFilteredByGlob("posts/*.md");
    });
  
    return {
      dir: {
        input: ".",
        output: "_site"
      }
    };
  };
  