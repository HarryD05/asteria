//Importing React Dependencies
import React, {useState, useEffect} from 'react';

//Importing components
import Navbar from '../components/navbar';
import Footer from './../components/footer';
import SEO from './../components/seo';
import ArticlePreview from '../components/articles/articlePreview';
import ArticleScroller from '../components/articleScroller';

//Importing banners
import BiochemBanner from './../assets/images/banners/Biochem.jpg';
import PhysicsTechBanner from './../assets/images/banners/Physics and Technology.jpg';
import EconBusinessBanner from './../assets/images/banners/Econ and Business.jpg';
import HumanitiesBanner from './../assets/images/banners/Humanities.jpg';
import MusicBanner from './../assets/images/banners/Music.jpg';
import ArtMediaBanner from './../assets/images/banners/Art and Media.jpg';
import LiteraturePhilosophyBanner from './../assets/images/banners/Literature and philosophy.jpg';
import PoliticsPhilosophyBanner from './../assets/images/banners/Politics and Philosophy.jpg';
import MathsBanner from './../assets/images/banners/Mathematics.jpg';

//Importing constants
import _ from './../constants/constants';

//Importing helpers
import { ArticlesMapper } from '../components/articles/articleHelperFunctions';

import './../styles/index.scss';

import { graphql } from 'gatsby';


const subjects = [
  [`2BB760`, `Biochem`, BiochemBanner],
  [`9C2111`, `Physics & Technology`, PhysicsTechBanner],
  [`BFAA34`, `Econ &  Business`, EconBusinessBanner],
  [`C8792C`, `Humanities`, HumanitiesBanner],
  [`622058`, `Music`, MusicBanner],
  [`376B70`, `Art & Media`, ArtMediaBanner],
  [`AF70BD`, `Literature & Philosophy`, LiteraturePhilosophyBanner],
  [`ACADED`, `Politics & Philosophy`, PoliticsPhilosophyBanner],
  [`3E5FCA`, `Maths`, MathsBanner],
]

const CategoriesPage = ({data}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem('hash') != null) {
      window.location.hash = window.localStorage.getItem('hash');
      window.localStorage.clear()
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const articleList = [];
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
    })

    setArticles(articleList);
  }, [data])

  const createSubjects = () => {
    const articleList = ArticlesMapper(articles);

    if (articleList === 0) return <p>No articles</p>;

    const banner = (info) => {
      if (info.length === 3) {
        return <div className="banner" style={{'backgroundImage': `url('${info[2]}')`}}></div>
      } else {
        return <h2>{info[1]}</h2>;
      }
    }

    return subjects.map((info, index) => {
      return <div className="subject" key={index} id={info[0]}>
        {banner(info)}
        <div className="previews">
          {articleList.map((article, index) => {
            if (article.Subject === info[0]) {
              return <ArticlePreview 
                key={index} Image={article.Image} Title={article.Title} Issue={article.Issue} Authors={article.Authors} LinkTo={article.LinkTo} Subject={article.Subject} IsVideo={article.IsVideo}
              />
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
    nodes{
      frontmatter {
        type
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