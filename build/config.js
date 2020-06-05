var path = require('path');


exports.alias = {
  main: path.resolve(__dirname, '../src'),
  component: path.resolve(__dirname, '../src/component'),
  'n-ui': path.resolve(__dirname, '../')
};
exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
