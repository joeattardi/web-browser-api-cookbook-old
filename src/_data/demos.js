const path = require('path');
const fs = require('fs');

function getDemos() {
  const demos = [];

  function addEntries(directory) {
    
  }

  const entries = fs.readdirSync('./src/demos', { withFileTypes: true });
  entries
    .filter(entry => entry.isDirectory())
    .forEach(directory => {
      const subdirectories = fs.readdirSync(path.resolve('./src/demos', directory.name), { withFileTypes: true })
        .filter(entry => entry.isDirectory());
      subdirectories.forEach(demo => {
        const basedir = path.resolve('./src/demos', directory.name, demo.name);
        const { title } = require(path.resolve(basedir, 'index.11tydata.js'));
        demos.push({
          title,
          basedir,
          permalink: `/${directory.name.substring(5)}/${demo.name}/`,
          full: `/${directory.name.substring(5)}/${demo.name}/full/`
        });

        // check for sub-demos (not common)
        const subDemos = fs.readdirSync(basedir, { withFileTypes: true })
          .filter(entry => entry.isDirectory());
        if (subDemos.length) {
          subDemos.forEach(subDemo => {
            demos.push({
              title,
              basedir,
              permalink: `/${directory.name.substring(5)}/${demo.name}/${subDemo.name}`,
              full: `/${directory.name.substring(5)}/${demo.name}/${subDemo.name}/full/`
            })
          });
        }
      });
    });

  return demos;
}

module.exports = getDemos;
