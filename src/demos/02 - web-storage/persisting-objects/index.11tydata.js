const title = 'Persisting Simple Objects';

module.exports = {
  title,
  basedir: __dirname,
  eleventyNavigation: {
    order: 1,
    key: 'todos',
    title,
    parent: 'webStorage'
  }
};
