// const singleSpaAngularWebpack = require('./buildscripts/custom-webpack');
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  const externals = [
    /^@angular\/.*/,
    "rxjs",
    "rxjs/operators",
    "single-spa"
  ];
  
  return  {
    ...singleSpaWebpackConfig,
    externals: externals
  }
};
