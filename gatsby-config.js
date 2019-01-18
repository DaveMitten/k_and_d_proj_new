const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId,
        accessToken
      }
    }
  ]
};

// CONTENTFUL_SPACE_ID=bqfvewi20spp
// CONTENTFUL_DELIVERY_ACCESS_TOKEN=953dffc6e7bb65890b44d3364f4360f8a586a9ea5cbe270ae5ba54e6094789e
// In your gatsby-config.js



// module.exports = {
//   siteMetadata: {
//     title: `K and D project`
//     // siteUrl: `#`,
//     // description: `personal project`
//   }
// };






