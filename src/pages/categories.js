//Importing React Dependencies
import React, {useState, useEffect} from 'react';

//Importing components
import Navbar from '../components/navbar';
import Footer from "./../components/footer";
import SEO from './../components/seo';
import ArticlePreview from '../components/articles/articlePreview';
import ArticleScroller from '../components/articleScroller';

//Importing constants
import _ from './../constants/constants';

//Importing helpers
import { ArticlesMapper } from '../components/articles/articleHelperFunctions';

import './../styles/index.scss';

import { graphql } from 'gatsby';


const subjects = [
  [`2BB760`, `Biology & Chemistry`],
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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem('hash') != null) {
      window.location.hash = window.localStorage.getItem('hash');
      window.localStorage.clear()
    }

    const articleList = [];
    const authors = {};

    data.allMarkdownRemark.edges.forEach(info => {
      info = info.node.frontmatter;

      if (info.type === "Article") {
        articleList.push(info);
      } else {
        authors[info.userID] = info;
      }
    })

    articleList.forEach(article => {
      article.author = authors[article.userID]
    })

    setArticles(articleList);
  }, [data])

  const createSubjects = () => {
    const articleList = ArticlesMapper(articles);

    if (articleList === 0) return <p>No articles</p>;

    return subjects.map((info, index) => {
      return <div className="subject" key={index} id={info[0]}>
        <h2>{info[1]}</h2>
        <div className="previews">
          {articleList.map((article, index) => {
            if (article.Subject === info[0]) {
              return <ArticlePreview key={index} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}/>
            }
          })}
        </div>
      </div>
    })
  }

  return (
    <>
      <Navbar />
      <main className="categories">
        <SEO seo={_.Categories.SEO} />
        <ArticleScroller />

        <h1>Categories</h1>

        <div className="subjects">{createSubjects()}</div>
      </main>
      <Footer />
    </>
  )
}

export default CategoriesPage;
export const pageQuery = graphql`
query articleQuery2{
  allMarkdownRemark{
    edges{
      node{
        frontmatter {
          type
          title
          description
          subject
          issue
          preview_image
          slug
          first_name
          surname
          userID
        }
      }
    }
  }
}
`