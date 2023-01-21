module.exports = {
  siteMetadata: {
    title: `Asteria Magazine`,
    siteUrl: `https://asteriamagazine.co.uk`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: "gatsby-remark-better-embed-video",
            options: {
              width: 200,
              height: 200, 
              related: false, 
              noIframeBorder: true, 
              showInfo: false
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: `images`  
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/fonts`,
        name: `fonts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/articles/markdowns`,
        name: `article-markdowns`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/profiles/markdowns`,
        name: `profile-markdowns`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/performances/markdowns`,
        name: `performance-markdowns`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/articles/images`,
        name: `article-images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/profiles/images`,
        name: `profile-images`
      }
    },  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/performances/images`,
        name: `performance-images`
      }
    },  
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `${__dirname}/src/assets/images/logo-lilac.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-BW9D6S287Q",
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ]
};