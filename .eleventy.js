const navigation = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const webc = require('@11ty/eleventy-plugin-webc');
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(navigation);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(webc, {
    components: 'src/_includes/_components/**/*.webc'
  });
  eleventyConfig.addPassthroughCopy('src/assets/images');

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
