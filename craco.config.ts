import path from 'path';

const config = {
  webpack: {
    alias: {
      '@dynamicComponents': path.resolve(__dirname, 'src/app/components'),
    },
  },
};

module.exports =  config;