require('babel-regenerator-runtime'); // add regenerator support for async await
require('main/styles/index.scss');

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.js/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
// srcContext.keys().forEach(srcContext);
