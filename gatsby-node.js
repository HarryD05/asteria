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

  const ArticleTemplate = require.resolve(`./src/components/articleDetails.js`)
  const articleData = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { type: { eq: "Article" } } }
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
  if (articleData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  articleData.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: ArticleTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}