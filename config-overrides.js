const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
  config.externals = {
    'react': 'React',
    'react-dom': 'ReactDOM'
  };
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);
  return config;
};