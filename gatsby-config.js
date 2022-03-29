module.exports = {
  siteMetadata: {
    title: 'The Coffee Blog'
  },

  plugins: [
  'gatsby-plugin-netlify-cms',
'gatsby-transformer-remark',


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
    },

{
 resolve: 'gatsby-source-filesystem',
 options: {
 name: 'blog',
 path: 'src/blog'
 }
 }


  ]
};
