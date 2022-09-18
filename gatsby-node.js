const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const ProfileTemplate = require.resolve(`./src/components/profiles/profileDetails.js`)
  const profileData = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        nodes {
          frontmatter {
            type
            slug
          }
        }
        
      }
    }
  `)
  if (profileData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  profileData.data.allMarkdownRemark.nodes.forEach((node) => {
    if (node.frontmatter.type === "Profile") {
      createPage({
        path: node.frontmatter.slug,
        component: ProfileTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    }
  })

  const ArticleTemplate = require.resolve(`./src/components/articles/articleDetails.js`)
  const articleData = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        nodes {
          id
          frontmatter {
            slug
            type
          }
        }
        
      }
    }
  `)
  if (articleData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  articleData.data.allMarkdownRemark.nodes.forEach((node) => {
    if (node.frontmatter.type === "Article") {
      createPage({
        path: node.frontmatter.slug,
        component: ArticleTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    }
  })
}