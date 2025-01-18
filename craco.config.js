module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.module.rules.push({
          test: /\.mdx$/,
          use: [
            {
              loader: '@mdx-js/loader',
              options: {},
            },
          ],
        });
        return webpackConfig;
      },
    },
  };
  