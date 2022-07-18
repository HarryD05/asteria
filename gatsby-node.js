exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const ProfileTemplate = require.resolve(`./src/components/profileDetails.js`)
  const profileData = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { type: { eq: "Profile" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (profileData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  profileData.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: ProfileTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}