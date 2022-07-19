//Import React dependencies
import React, { useEffect, useState, useRef } from "react";
import Markdown from "markdown-to-jsx";

//Importing constants
import _ from "./../../constants/constants";

//Importing components
import SEO from "./../seo";
import Navbar from "./../navbar";

//Importing helpers
import {ArticleDescription, ArticleDetailsMapper, ArticleImage, ArticleIssue, ArticleMarkdown, ArticleSubject, ArticleTitle} from './articleHelperFunctions';

import { graphql } from "gatsby";

import "./../../styles/index.scss";

const subjects = {
  '2BB760': `Biochem`,
  '9C2111': `Physics & Technology`,
  'BFAA34': `Econ &  Business`,
  'C8792C': `Humanities`,
  '622058': `Music`,
  '376B70': `Art & Media`,
  'AF70BD': `Literature & Philosophy`,
  'CDCEED': `Politics & Philosophy`,
  '3E5FCA': `Maths`,
}


const ArticleDetails = ({ data }) => {

  const url = typeof window !== 'undefined' ? window.location.href.split(/[?#]/)[0] : '';

  const [ArticleDetails, setArticleDetails] = useState(null);
  let articleId = url.slice(url.indexOf("articles") + 9);

  if (articleId[articleId.length - 1] === '/') {
    articleId = articleId.slice(0, articleId.length - 1);
  }

  const articles = [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  useEffect(() => {
    (async () => {
      {
        data.allMarkdownRemark.edges.map(article => (
          articles.push(article.node.frontmatter)
        ))
      }

      var Article = {};
      for (var i = 0; i < articles.length; i++) {
        console.log(articles[i])
        if (articles[i].slug.slice(10) === articleId) {
          articles[i]["html"] = data.allMarkdownRemark.edges[i].node.html;

          Article["articles"] = [articles[i]];
          break;
        }
      }

      setArticleDetails(ArticleDetailsMapper(Article));
    })();
  }, [articleId]);

  return (ArticleDetails ?
    <>
      <SEO seo={{
        ..._.ArticleDetails.SEO,
        title: `STEAM Project | ${ArticleTitle(ArticleDetails)}`,
        image: ArticleImage(ArticleDetails),
        url
      }} />
      <main>
        <Navbar />
        <div className="articleDetails">
          <div className="subject-hover">
            <div className={`circle bg${ArticleSubject(ArticleDetails)}`}></div>
            <p>{`${subjects[ArticleSubject(ArticleDetails)]}`}</p>
          </div>

          <div className="top">
            <img 
              src={(typeof(ArticleImage(ArticleDetails)) === "string") ? ArticleImage(ArticleDetails) : ArticleImage(ArticleDetails).default} 
              alt={`Cover image of ${ArticleTitle(ArticleDetails)}`}>
            </img>
            <div className="details">
              <h1>{ArticleTitle(ArticleDetails)}</h1> 
              <p>{ArticleDescription(ArticleDetails)}</p>
            </div>
          </div>
          <Markdown className="content">{ArticleMarkdown(ArticleDetails)}</Markdown>
          <br />
          <p>Content to add: Author stuff, name, image?, potentially their other articles</p>
        </div>
      </main>
    </> : null
  );
};

export default ArticleDetails;
export const pageQuery = graphql`
  query articleQuery1 {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { type: { eq: "Article" } } }
    ){
      edges{
        node{
          html
          frontmatter {
            title
            description
            subject
            issue
            slug
            preview_image
          }
        }
      }
    }
  }
`