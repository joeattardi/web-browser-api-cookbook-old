const title = 'Parsing URLs';

module.exports = {
  title,
  basedir: __dirname,
  eleventyNavigation: {
    order: 1,
    key: 'parsingUrls',
    title,
    parent: 'urlsAndRouting'
  },
  files: {
    js: [
      { 
        filename: 'index.js',
        description: 'Parses the URL and renders its properties.'
      }
    ],
    css: [
      {
        filename: 'index.css',
        description: 'Styles for the demo'
      }
    ],
    html: [
      {
        filename: 'layout.html',
        description: 'Basic form layout.'
      },
      {
        filename: 'template.html',
        description: 'Template used to render URL details.'
      }
    ]
  }
};
