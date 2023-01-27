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
  PerformanceDescription, PerformanceDetailsMapper, PerformanceImage, PerformanceMarkdown, PerformanceTitle, PerformanceComposer,
  AuthorNames, AuthorLinkTos, AuthorImages, AuthorPronouns
} from './performanceHelperFunctions';

import { graphql } from "gatsby";

import "./../../styles/index.scss";
import "katex/dist/katex.min.css";

const PerformanceDetails = ({ data }) => {

  const url = typeof window !== 'undefined' ? window.location.href.split(/[?#]/)[0] : '';

  const [PerformanceDetails, setPerformanceDetails] = useState(null);
  let performanceId = url.slice(url.indexOf("performances") + 13);

  if (performanceId[performanceId.length - 1] === '/') {
    performanceId = performanceId.slice(0, performanceId.length - 1);
  }

  const performances = [];
  const authors = {};

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [performanceId]);

  useEffect(() => {
    (async () => {
      {
        data.allMarkdownRemark.nodes.forEach((info, index) => {
          info = info.frontmatter;

          if (info.type === "Performance") {
            performances.push({...info, index});
          } else if (info.type === "Profile") {
            authors[info.userID] = info;
          }
        })

        performances.forEach(performance => {
          const authorList = [];
          performance.userIDs.forEach(ID => {
            authorList.push(authors[ID])
          })
          performance.authors = authorList;
        })
      }

      const Performance = {};
      for (let i = 0; i < performances.length; i++) {
        if (performances[i].slug.slice(14) === performanceId) {
          console.log('here')
          performances[i]["html"] = data.allMarkdownRemark.nodes[performances[i].index].html;

          Performance["performances"] = [performances[i]];
          break;
        }
      }

      setPerformanceDetails(PerformanceDetailsMapper(Performance));

      console.log(PerformanceDetailsMapper(Performance))
    })();
  }, [performanceId]);

  const image = () => (typeof(PerformanceImage(PerformanceDetails)) === "string") ? PerformanceImage(PerformanceDetails) : PerformanceImage(PerformanceDetails).default;

  const authorImages = () => {
    const result = [];
    for (let i = 0; i < AuthorNames(PerformanceDetails).length; i++) {
      result.push(<div className="author">
        <a className="authorImg" href={AuthorLinkTos(PerformanceDetails)[i]}>
          <img
            src={(typeof (AuthorImages(PerformanceDetails)[i]) === "string") ? AuthorImages(PerformanceDetails)[i] : AuthorImages(PerformanceDetails)[i].default}
            alt={`Profile picture of ${AuthorNames(PerformanceDetails)[i]}`}
          ></img>
        </a>
        <div className="authorDetails">
          <a className="name" href={AuthorLinkTos(PerformanceDetails)[i]}>{AuthorNames(PerformanceDetails)[i]}</a><br />
          <a className="pronouns" href={AuthorLinkTos(PerformanceDetails)[i]}>{AuthorPronouns(PerformanceDetails)[i]}</a>
        </div>
      </div>)

    }
    return result;
  }

  return (PerformanceDetails ?
    <>
      <SEO seo={{
        ..._.PerformanceDetails.SEO,
        title: `Asteria | ${PerformanceTitle(PerformanceDetails)}`,
        image: image(),
        url
      }} />
      <main>
        <Navbar />
        <div className="coverImage" style={{'backgroundImage': `url('${image()}')`}}></div>
        <div className="performanceDetails">
          <div className="top">      
            <div className="authors">{authorImages()}</div>   
            <div className="details">
              <h1>{PerformanceTitle(PerformanceDetails)}</h1>
              <em>{PerformanceComposer(PerformanceDetails)}</em>
              <p>{PerformanceDescription(PerformanceDetails)}</p>
            </div>
          </div>

          <div className={`performanceContent`} dangerouslySetInnerHTML={{ __html: PerformanceMarkdown(PerformanceDetails) }}></div>
        </div>
      </main>
      <Footer />
    </> : null
    
  );
};

export default PerformanceDetails;
export const pageQuery = graphql`
  query performanceQuery1 {
    allMarkdownRemark{
      nodes{
        html
        frontmatter {
          type
          title
          composer
          description
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