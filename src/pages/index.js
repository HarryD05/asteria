//Importing React Dependencies
import React, {useState, useEffect} from "react";

//Importing components
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import SEO from "./../components/seo";
import ArticleShowcase from "./../components/articleShowcase";
import ArticlePreview from "./../components/articles/articlePreview";
import { ArticlesMapper } from "./../components/articles/articleHelperFunctions";
import PerformancePreview from "./../components/performances/performancePreview";
import { PerformancesMapper } from "./../components/performances/performanceHelperFunctions";
import LoadingSpinner from "../components/loading";

//Importing constants
import _ from "./../constants/constants";

import { graphql } from "gatsby";

import "./../styles/index.scss";

const IndexPage = ({data}) => {
  const [articles, setArticles] = useState([]);
  const [performances, setPerformances] = useState([]);
  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  useEffect(() => {
    const articleList = [];
    const performanceList = [];
    const featuredList = [];
    const authors = {};

    data.allMarkdownRemark.nodes.forEach(info => {
      info = info.frontmatter;

      if (info.type === "Article") {
        articleList.push(info);
      } else if (info.type === "Performance") {
        performanceList.push(info);
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

    performanceList.forEach(performance => {
      const authorList = [];

      performance.userIDs.forEach(ID => {
        authorList.push(authors[ID])
      })
      performance.authors = authorList;
    })


    setFeaturedArticles(featuredList);
    setArticles(articleList);
    setPerformances(performanceList);
  }, [data])

  const createArticles = () => {
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
        key={index} Image={article.Image} Title={article.Title} Authors={article.Authors} LinkTo={article.LinkTo} Subject={article.Subject}
      />)


    })

    const content = [];
    const keys = Object.keys(issues).map(issue => Number(issue));
    for (let i = Math.max(...keys); i >= Math.min(...keys); i--) {
      if (issues.hasOwnProperty(i)) {
        content.push(<><h3>Issue {i}</h3><div className="articlePreviews">{issues[i].map(article => article)}</div></>)
      }
    }

    return content;
  }

  const createPerformances= () => {
    const performanceList = PerformancesMapper(performances);

    if (performanceList === 0) return <p>No performances yet...</p>;
    //return <LoadingSpinner />;

    const content = [];

    performanceList.forEach((performance, index) => {
      content.push(<PerformancePreview key={index} Image={performance.Image} Title={performance.Title} Composer={performance.Composer} Authors={performance.Authors} LinkTo={performance.LinkTo}
      />)
    })

    return <div className="performancePreviews">{content}</div>;
  }

  return (
    <>
      <Navbar />
      <main className="home">
        <SEO seo={_.Home.SEO} />

        <ArticleShowcase articles={featuredArticles} />

        <div className="download">
          <a href="https://drive.google.com/file/d/190nUBLELKR2c54ucczM0etssNBWUTktz/view" target="_blank" rel="noreferrer">View the most recent issue</a>
        </div>

        <div className="issues">
          <h1>Articles</h1>
          {createArticles()}

          <h1>Performances</h1>
          {createPerformances()}
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
        composer
        description
        subject
        issue
        preview_image
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