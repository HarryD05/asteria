module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/src/styles/index.scss";`,
      }
    },
  ],
}