const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "staged/css": "css" });
  eleventyConfig.addPassthroughCopy({ "staged/js": "js" });
  eleventyConfig.addPassthroughCopy({ "staged/fonts": "fonts" });

  eleventyConfig.addTransform("htmlmin", function (content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

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
