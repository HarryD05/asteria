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
  ArticleDescription, ArticleDetailsMapper, ArticleImage, ArticleMarkdown, ArticleSubject, ArticleTitle, VideoURL, VideoTitle,
  AuthorNames, AuthorLinkTos, AuthorImages, AuthorPronouns
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

  const image = () => (typeof(ArticleImage(ArticleDetails)) === "string") ? ArticleImage(ArticleDetails) : ArticleImage(ArticleDetails).default;

  const authorImages = () => {
    const result = [];
    for (let i = 0; i < AuthorNames(ArticleDetails).length; i++) {
      result.push(<a className="authorImg" href={AuthorLinkTos(ArticleDetails)[i]}>
        <img
          src={(typeof (AuthorImages(ArticleDetails)[i]) === "string") ? AuthorImages(ArticleDetails)[i] : AuthorImages(ArticleDetails)[i].default}
          alt={`Profile picture of ${AuthorNames(ArticleDetails)[i]}`}
        ></img>
      </a>)
    }
    return result;
  }

  const authorLinks = () => {
    const result = [];
    for (let i = 0; i < AuthorNames(ArticleDetails).length; i++) {
      result.push(<div className="authorDetails">
        <a className="name" href={AuthorLinkTos(ArticleDetails)[i]}>{AuthorNames(ArticleDetails)[i]}</a><br />
        <a className="pronouns" href={AuthorLinkTos(ArticleDetails)[i]}>{AuthorPronouns(ArticleDetails)[i]}</a>
      </div>)
    }
    return result;
  }

  const displayVideo = () => {
    const Video = {URL: VideoURL(ArticleDetails), Title: VideoTitle(ArticleDetails)}

    if (Video.URL !== null) {
      return <div className="video_container">
        <iframe
          src={Video.URL}
          title={Video.Title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    }
  }

  return (ArticleDetails ?
    <>
      <SEO seo={{
        ..._.ArticleDetails.SEO,
        title: `Asteria | ${ArticleTitle(ArticleDetails)}`,
        image: ArticleImage(ArticleDetails),
        url
      }} />
      <main>
        <Navbar />
        <div className="coverImage" style={{'backgroundImage': `url('${image()}')`}}></div>
        <div className="articleDetails">
          <a className={`subject-hover bg${ArticleSubject(ArticleDetails)}-light`} href={`/categories`} onClick={changePage}>
            <p>{`${subjects[ArticleSubject(ArticleDetails)]}`}</p>
          </a>

          <div className="top">
            <div className="authorImages">{authorImages()}</div>
           
            <div className="details">
              <h1>{ArticleTitle(ArticleDetails)}</h1> 
              <p>{ArticleDescription(ArticleDetails)}</p>
              {authorLinks()}
            </div>
          </div>
          <Markdown className="content">{ArticleMarkdown(ArticleDetails)}</Markdown>
          {displayVideo()}
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
            userIDs
            first_name
            surname
            pronouns
            school
            profile_picture
            video_url
            video_title
            userID
          }
        }
      }
    }
  }
`



/*
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
      */