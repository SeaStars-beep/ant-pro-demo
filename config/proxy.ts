/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    // '/api/': {
    //   target: 'http://59.110.8.36:8833',
    //   changeOrigin: true,
    //   pathRewrite: { '^': '' },
    // },
    '/order/api/': {
      target: 'http://reorder-dev.qqgyhk.com',
      changeOrigin: true,
      // pathRewrite: { '^': '' },
    },
  },
  test: {
    // '/api/': {
    //   target: 'https://preview.pro.ant.design',
    //   changeOrigin: true,
    //   pathRewrite: { '^': '' },
    // },
    '/order/api/': {
      target: 'https://v2.umijs.org/zh/config/#proxy',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
