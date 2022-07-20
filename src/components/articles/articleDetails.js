//Import React dependencies
import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

//Importing constants
import _ from "./../../constants/constants";

//Importing components
import SEO from "./../seo";
import Navbar from "./../navbar";
import Footer from "./../footer";

//Importing helpers
import {
  ArticleDescription, ArticleDetailsMapper, ArticleImage, ArticleMarkdown, ArticleSubject, ArticleTitle, 
  AuthorName, AuthorLinkTo, AuthorImage, AuthorPronouns, AuthorSchool
} from './articleHelperFunctions';

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
  const authors = {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  useEffect(() => {
    (async () => {
      {
        data.allMarkdownRemark.edges.forEach((info, index) => {
          info = info.node.frontmatter;

          if (info.type === "Article") {
            articles.push({...info, index});
          } else {
            authors[info.userID] = info;
          }
        })

        articles.forEach(article => {
          article.author = authors[article.userID]
        })
      }

      const Article = {};
      for (let i = 0; i < articles.length; i++) {
        if (articles[i].slug.slice(10) === articleId) {
          articles[i]["html"] = data.allMarkdownRemark.edges[articles[i].index].node.html;

          Article["articles"] = [articles[i]];
          break;
        }
      }

      setArticleDetails(ArticleDetailsMapper(Article));
    })();
  }, [articleId]);

  const changePage = () => {
    window.localStorage.setItem('hash', ArticleSubject(ArticleDetails))
  }

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
          <a className={`subject-hover bg${ArticleSubject(ArticleDetails)}-light`} href={`/categories`} onClick={changePage}>
            <p>{`${subjects[ArticleSubject(ArticleDetails)]}`}</p>
          </a>

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

          <a href={AuthorLinkTo(ArticleDetails)} className="author">
            <div className="authorDetails">
              <h3>{AuthorName(ArticleDetails)}</h3>
              <i>{AuthorPronouns(ArticleDetails)}</i>
              <p>{AuthorSchool(ArticleDetails)}</p>
            </div>
            <div className="authorImg">
              <img 
              src={(typeof(AuthorImage(ArticleDetails)) === "string") ? AuthorImage(ArticleDetails) : AuthorImage(ArticleDetails).default} 
              alt={`Profile picture of ${AuthorName(ArticleDetails)}`}>
            </img>
            </div>
          </a>

          <Markdown className="content">{ArticleMarkdown(ArticleDetails)}</Markdown>
        </div>
      </main>
      <Footer />
    </> : null
  );
};

export default ArticleDetails;
export const pageQuery = graphql`
  query articleQuery1 {
    allMarkdownRemark{
      edges{
        node{
          html
          frontmatter {
            type
            title
            description
            subject
            issue
            slug
            preview_image
            first_name
            surname
            pronouns
            school
            profile_picture
            userID
          }
        }
      }
    }
  }
`