//Importing React Dependencies
import React, {useState, useEffect} from 'react';

//Importing components
import Navbar from '../components/navbar';
import SEO from './../components/seo';
import ArticlePreview from '../components/articlePreview';
import ArticleScroller from '../components/articleScroller';

//Importing constants
import _ from './../constants/constants';

//Importing helpers
import { ArticlesMapper } from '../components/articleHelperFunctions';

import './../styles/index.scss';

import { graphql } from 'gatsby';


const subjects = [
  [`2BB760`, `Biochem`],
  [`9C2111`, `Physics & Technology`],
  [`BFAA34`, `Econ &  Business`],
  [`C8792C`, `Humanities`],
  [`622058`, `Music`],
  [`376B70`, `Art & Media`],
  [`AF70BD`, `Literature & Philosophy`],
  [`CDCEED`, `Politics & Philosophy`],
  [`3E5FCA`, `Maths`],
]

const CategoriesPage = ({data}) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const articleList = [];

    data.allMarkdownRemark.edges.forEach(article => {
      article = article.node.frontmatter;

      articleList.push(article);
    })

    console.log(articleList)

    setArticles(articleList);
  }, [data])

  const createSubjects = () => {
    const articleList = ArticlesMapper(articles);
    console.log(articleList)

    if (articleList === 0) return <p>No articles</p>;

    return subjects.map((info, index) => {
      return <div className="subject" key={index} id={info[0]}>
        <h2>{info[1]}</h2>
        <div className="previews">
          {articleList.map((article, index) => {
            if (article.Subject === info[0]) {
              return <><ArticlePreview key={index} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}/>
              <ArticlePreview key={index + 1} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}/>
              <ArticlePreview key={index + 2} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}/>
              <ArticlePreview key={index + 3} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}/>
              <ArticlePreview key={index + 4} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}/>
              <ArticlePreview key={index + 5} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}/>
              <ArticlePreview key={index + 6} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}/>
              <ArticlePreview key={index + 7} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}/>
              <ArticlePreview key={index + 8} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}/>
              <ArticlePreview key={index + 9} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}/></>
            }
          })}
        </div>
      </div>
    })
  }

  return (
    <>
      <Navbar></Navbar>
      <main className="categories">
        <SEO seo={_.Categories.SEO} />
        <ArticleScroller />

        <h1>Categories</h1>

        <div className="subjects">{createSubjects()}</div>
      </main>
    </>
  )
}

export default CategoriesPage;
export const pageQuery = graphql`
query articleQuery2{
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