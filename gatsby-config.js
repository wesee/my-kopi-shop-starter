module.exports = {
  siteMetadata: {
    title: 'The Coffee Blog'
  },

  plugins: [
  'gatsby-plugin-netlify-cms',

    {
      resolve: `gatsby-plugin-sass`,
      options: {
       cssLoaderOptions: {
         esModule: false,
         modules: {
           namedExport: false,
         },
       },
     },
    }

  ]
};
