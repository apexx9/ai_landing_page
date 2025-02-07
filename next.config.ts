import type { NextConfig } from "next";
import path from 'path';

const globalSassImports = `@import "variables"; @import "mixins";`;


/* SASS LOADER */
const SASS_LOADER = {
  loader: 'sass-loader',
  options: {
      sassOptions: {
          includePaths: [path.join(__dirname, 'styles')],
          implementation: 'sass-embedded',
      },
      additionalData: globalSassImports,
  },
};


const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {

  },
  experimental: {
    turbo: {
        rules: {
            '*.svg': {
                as: '*.js',
                loaders: ['@svgr/webpack'],
            },
            '*.module.scss': {
                as: '*.module.css',
                loaders: [SASS_LOADER],
            },
            '*.scss': {
                as: '*.css',
                loaders: [SASS_LOADER],
            },
        },
    },
},

};

export default nextConfig;