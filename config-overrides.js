const { injectBabelPlugin } = require('react-app-rewired')
const rewireSass = require('react-app-rewire-sass-modules')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true  }], config)
    config =rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#24BA8A" },
        javascriptEnabled: true,
      })(config, env)
    config = rewireSass(config, env)
    return config  
}