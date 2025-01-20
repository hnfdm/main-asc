const path = require('path');

module.exports = {
    webpack: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Alias untuk folder 'src'
        '@components' : path.resolve(__dirname, 'src/components'), // Alias untuk folder 'src/components'
        '@styles' : path.resolve(__dirname, 'src/styles'), // Alias untuk folder 'src/styles'
      },
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

  