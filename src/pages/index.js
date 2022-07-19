//Importing React Dependencies
import React, {useState, useEffect} from "react";

//Importing components
import Navbar from "../components/navbar";
import SEO from './../components/seo';
import ArticlePreview from '../components/articlePreview';
import { ArticlesMapper } from '../components/articleHelperFunctions';

//Importing constants
import _ from './../constants/constants';

import { graphql } from "gatsby";

import './../styles/index.scss';

const IndexPage = ({data}) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const articleList = [];

    data.allMarkdownRemark.edges.forEach(article => {
      article = article.node.frontmatter;

      articleList.push(article);
    })

    setArticles(articleList);
  }, [data])

  const createIssues = () => {
    const issues = {};

    const articleList = ArticlesMapper(articles);

    if (articleList === 0) return <p>No articles</p>;

    articleList.forEach((article, index) => {
      if (!issues.hasOwnProperty(article.Issue)) {
        issues[article.Issue] = [];
      } 

      issues[article.Issue].push(<ArticlePreview 
        key={index} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}
      />)
    })

    let content = [];
    for (let i = Object.keys(issues).length; i > 0; i--) {
      content.push(<><h3>Issue {i}</h3><div className="issue-articles">{issues[i].map(article => article)}</div></>)
    }

    return content;
  }

  return (
    <>
      <Navbar></Navbar>
      <main className="home">
        <SEO seo={_.Home.SEO} />

        <p>Article showcase</p><br />

        <h2>Archive</h2>
        <div className="issues">{createIssues()}</div>
      </main>
    </>
  )
}

export default IndexPage
export const pageQuery = graphql`
query articleQuery3{
  allMarkdownRemark(
    limit: 100
    filter: { frontmatter: { type: { eq: "Article" } } }
  ){
    edges{
      node{
        frontmatter {
          title
          description
          subject
          issue
          preview_image
          slug
        }
      }
    }
  }
}
`