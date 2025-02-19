module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `styles/` to `_site/styles`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("styles");

  // Copy `scripts/` to `_site/scripts`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("scripts");

  // Copy `pages/` to `_site/pages`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("pages");
  
  // Copy `images/` to `_site/images`
  eleventyConfig.addPassthroughCopy("images");

  // Copy `css/fonts/` to `_site/css/fonts`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("css/fonts");

  // Copy any .jpg file to `_site`, via Glob pattern
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("**/*.jpg");

  
};