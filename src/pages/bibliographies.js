//Importing React Dependencies
import React, { useState, useEffect } from "react";

//Importing components
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SEO from "../components/seo";

import LoadingSpinner from "../components/loading";

//Importing constants
import _ from "../constants/constants";

import "./../styles/index.scss";

import { graphql } from 'gatsby';

const subjects = {
  "2BB760": `Biochem`,
  "9C2111": `Physics & Technology`,
  "BFAA34": `Econ &  Business`,
  "C8792C": `Humanities`,
  "622058": `Music`,
  "376B70": `Art & Media`,
  "AF70BD": `Literature & Philosophy`,
  "ACADED": `Politics & Philosophy`,
  "3E5FCA": `Maths`,
}

const BibliographyPage = ({data}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  useEffect(() => {
    const articleList = [];

    data.allMarkdownRemark.nodes.forEach(info => {
      info = info.frontmatter;

      if (info.type === "Article") {
        articleList.push(info);
      } 
    })

    setArticles(articleList);
  }, [data])

  const displayIssues = () => {
    const issues = {};

    if (articles.length === 0) return <LoadingSpinner />;

    articles.forEach((article, index) => {
      console.log(article)

      if (!issues.hasOwnProperty(article.issue)) {
        issues[article.issue] = {};
      }

      if (article.Subject === "") {
        return;
      }

      if (!issues[article.issue].hasOwnProperty(article.subject)) {
        issues[article.issue][article.subject] = [];
      }

      issues[article.issue][article.subject].push(<li><a href={`${article.slug}/#bibliography`} target="_blank" rel="noreferrer">{article.title}</a></li>)
    })

    const content = [];
    const issueKeys = Object.keys(issues).map(issue => Number(issue));
    for (let i = Math.min(...issueKeys); i <= Math.max(...issueKeys); i++) {
      if (issues.hasOwnProperty(i)) {
        const issueContent = [];
        for (const subject of Object.keys(issues[i])) {
          issueContent.push(<div className={`subjectArticles bg${subject}-light`}><h3>{subjects[subject]}</h3><ul >{issues[i][subject].map(article => article)}</ul></div>)
        }
        content.push(<><h2>Issue {i}</h2><div className="issueArticles">{issueContent.map(issue => issue)}</div></>)
      }
      
    }
    return content;
  }

  return (
    <>
      <Navbar />
      <main className="BibliographyPage">
        <SEO seo={_.Bibliography.SEO} />

        <h1>Bibliographies</h1>

        {displayIssues()}

      </main>
      <Footer />
    </>
  )
}


export default BibliographyPage;

export const pageQuery = graphql`
query articleQuery4{
  allMarkdownRemark{
    nodes{
      frontmatter {
        type
        title
        subject
        slug
        issue
      }
    }
  }
}
`