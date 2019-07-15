const { resolve } = require('path');

const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackResolve,
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#ff7900' },
  }),
  addWebpackResolve({
    extensions: ['.js'],
    alias: {
      components: resolve(__dirname, 'src', 'components'),
      config: resolve(__dirname, 'src', 'config'),
      layouts: resolve(__dirname, 'src', 'layouts'),
      pages: resolve(__dirname, 'src', 'pages'),
      store: resolve(__dirname, 'src', 'store'),
    },
  })
);
