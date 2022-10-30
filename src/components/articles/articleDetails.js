//Import React dependencies
import React, { useEffect, useState } from "react";

//Importing constants
import _ from "../../constants/constants";

//Importing components
import SEO from "../seo";
import Navbar from "../navbar";
import Footer from "../footer";

//Importing helpers
import {
  ArticleDescription, ArticleDetailsMapper, ArticleImage, ArticleMarkdown, ArticleSubject, ArticleTitle,
  AuthorNames, AuthorLinkTos, AuthorImages, AuthorPronouns
} from './articleHelperFunctions';

import { graphql } from "gatsby";

import "./../../styles/index.scss";
import "katex/dist/katex.min.css";

const subjects = {
  '2BB760': `Biochem`,
  '9C2111': `Physics & Technology`,
  'BFAA34': `Econ &  Business`,
  'C8792C': `Humanities`,
  '622058': `Music`,
  '376B70': `Art & Media`,
  'AF70BD': `Literature & Philosophy`,
  'ACADED': `Politics & Philosophy`,
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
    if (window.location.hash.indexOf("#bibliography") !== -1) {
      setTimeout(() => {
        document.getElementById(window.location.hash.slice(1,13)).scrollIntoView({ behavior: 'smooth' })
      }, 500)
    } else {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }, [articleId]);

  useEffect(() => {
    (async () => {
      {
        data.allMarkdownRemark.nodes.forEach((info, index) => {
          info = info.frontmatter;

          if (info.type === "Article") {
            articles.push({...info, index});
          } else if (info.type === "Profile") {
            authors[info.userID] = info;
          }
        })

        articles.forEach(article => {
          const authorList = [];
          article.userIDs.forEach(ID => {
            authorList.push(authors[ID])
          })
          article.authors = authorList;
        })
      }

      const Article = {};
      for (let i = 0; i < articles.length; i++) {
        if (articles[i].slug.slice(10) === articleId) {
          articles[i]["html"] = data.allMarkdownRemark.nodes[articles[i].index].html;

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

  const image = () => (typeof(ArticleImage(ArticleDetails)) === "string") ? ArticleImage(ArticleDetails) : ArticleImage(ArticleDetails).default;

  const authorImages = () => {
    const result = [];
    for (let i = 0; i < AuthorNames(ArticleDetails).length; i++) {
      result.push(<div className="author">
        <a className="authorImg" href={AuthorLinkTos(ArticleDetails)[i]}>
          <img
            src={(typeof (AuthorImages(ArticleDetails)[i]) === "string") ? AuthorImages(ArticleDetails)[i] : AuthorImages(ArticleDetails)[i].default}
            alt={`Profile picture of ${AuthorNames(ArticleDetails)[i]}`}
          ></img>
        </a>
        <div className="authorDetails">
          <a className="name" href={AuthorLinkTos(ArticleDetails)[i]}>{AuthorNames(ArticleDetails)[i]}</a><br />
          <a className="pronouns" href={AuthorLinkTos(ArticleDetails)[i]}>{AuthorPronouns(ArticleDetails)[i]}</a>
        </div>
      </div>)

    }
    return result;
  }

  return (ArticleDetails ?
    <>
      <SEO seo={{
        ..._.ArticleDetails.SEO,
        title: `Asteria | ${ArticleTitle(ArticleDetails)}`,
        image: image(),
        url
      }} />
      <main>
        <Navbar />
        <div className="coverImage" style={{'backgroundImage': `url('${image()}')`}}></div>
        <div className="articleDetails">
          <a className={`subject-hover bg${ArticleSubject(ArticleDetails)}-light`} href={`/articles`} onClick={changePage}>
            <p>{`${subjects[ArticleSubject(ArticleDetails)]}`}</p>
          </a>

          <div className="top">      
            <div className="authors">{authorImages()}</div>   
            <div className="details">
              <div className={`a${ArticleSubject(ArticleDetails)}`}><h1>{ArticleTitle(ArticleDetails)}</h1></div>
              <p>{ArticleDescription(ArticleDetails)}</p>
            </div>
          </div>

          <div className={`articleContent a${ArticleSubject(ArticleDetails)}`} dangerouslySetInnerHTML={{__html: ArticleMarkdown(ArticleDetails) }}></div>
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
      nodes{
        html
        frontmatter {
          type
          title
          description
          subject
          issue
          slug
          preview_image
          userIDs
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
`