module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "staged/css": "css" });
  eleventyConfig.addPassthroughCopy({ "staged/js": "js" });
  eleventyConfig.addPassthroughCopy({ "staged/fonts": "fonts" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngins: "njk",
    HTMLTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
