//Importing React Dependencies
import React, {useState, useEffect} from "react";

//Importing components
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import SEO from "./../components/seo";
import ArticleShowcase from "./../components/articleShowcase";
import ArticlePreview from "./../components/articles/articlePreview";
import { ArticlesMapper } from "./../components/articles/articleHelperFunctions";
import LoadingSpinner from "../components/loading";

import issue1 from "./../assets/pdfs/Placeholder-TheAsteriaMagazine.pdf";

//Importing constants
import _ from "./../constants/constants";

import { graphql } from "gatsby";

import "./../styles/index.scss";

const IndexPage = ({data}) => {
  const [articles, setArticles] = useState([])
  const [featuredArticles, setFeaturedArticles] = useState([])

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  useEffect(() => {
    const articleList = [];
    const featuredList = [];
    const authors = {};

    data.allMarkdownRemark.nodes.forEach(info => {
      info = info.frontmatter;

      if (info.type === "Article") {
        articleList.push(info);
      } else if (info.type === "Profile") {
        authors[info.userID] = info;
      }
    })

    articleList.forEach(article => {
      const authorList = [];

      article.userIDs.forEach(ID => {
        authorList.push(authors[ID])
      })
      article.authors = authorList

      const articleID = article.slug.slice(10);
      if (_.SliderArticles.Articles.indexOf(articleID) !== -1) {
        featuredList.push({
          Title: article.title,
          Description: article.description,
          Authors: article.authors.map(author => `${author.first_name} ${author.surname}`),
          Image: require(`./../assets/articles/images/${article.preview_image}`).default,
          ArticleLink: article.slug,
          ProfileLinks: article.authors.map(author => author.slug)
        })
      }
    })


    setFeaturedArticles(featuredList);
    setArticles(articleList);
  }, [data])

  const createIssues = () => {
    const issues = {};

    const articleList = ArticlesMapper(articles);

    if (articleList === 0) return <LoadingSpinner />;

    articleList.forEach((article, index) => {
      if (!issues.hasOwnProperty(article.Issue)) {
        issues[article.Issue] = [];
      }

      if (article.Subject === "") {
        return;
      }

      issues[article.Issue].push(<ArticlePreview
        key={index} Image={article.Image} Title={article.Title} Authors={article.Authors} LinkTo={article.LinkTo} Subject={article.Subject} IsVideo={article.IsVideo}
      />)


    })

    const content = [];
    const keys = Object.keys(issues).map(issue => Number(issue));
    for (let i = Math.max(...keys); i >= Math.min(...keys); i--) {
      if (issues.hasOwnProperty(i)) {
        content.push(<><h2>Issue {i}</h2><div className="issue-articles">{issues[i].map(article => article)}</div></>)
      }
    }

    return content;
  }

  return (
    <>
      <Navbar />
      <main className="home">
        <SEO seo={_.Home.SEO} />

        <ArticleShowcase articles={featuredArticles} />

        <div className="download">
          <a href={issue1} download>Download the most recent issue</a>
        </div>

        <div className="issues">
          <h1>Archive</h1>
          {createIssues()}
          </div>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
export const pageQuery = graphql`
query articleQuery3{
  allMarkdownRemark{
    nodes{
      frontmatter {
        type
        articleID
        title
        description
        subject
        issue
        preview_image
        video_url
        userIDs
        slug
        first_name
        surname
        userID
      }
    }
  }
}
`