//Import React dependencies
import React, { useEffect, useState, useRef } from "react";
import { MDXRenderer } from 'gatsby-plugin-mdx'

//Importing constants
import _ from "./../../constants/constants";

//Importing components
import SEO from "./../seo";
import Navbar from "./../navbar";
import ArticlePreview from "./../articles/articlePreview";
import PerformancePreview from "./../performances/performancePreview";
import Footer from "./../footer";

//Importing helpers
import {ProfileDetailsMapper, ProfileMarkdown, ProfileImage, SchoolImage, ProfileName, ProfilePronouns, ProfileRole, ProfileSchool} from './profileHelperFunctions';
import {ArticleDetailsMapper} from './../articles/articleHelperFunctions';
import {PerformanceDetailsMapper } from './../performances/performanceHelperFunctions';

import { graphql } from "gatsby";

import "./../../styles/index.scss";

const schoolURLs = {
  'Reading School': 'https://www.reading-school.co.uk/',
  'Kendrick School': 'https://www.kendrick.reading.sch.uk/',
  'Abbey School': 'https://theabbey.co.uk/'
}

const ProfileDetails = ({ data }) => {
  const url = typeof window !== 'undefined' ? window.location.href.split(/[?#]/)[0] : '';

  const [ProfileDetails, setProfileDetails] = useState(null);
  const [ArticlesDetails, setArticlesDetails] = useState([]);
  const [PerformancesDetails, setPerformancesDetails] = useState([]);
  let profileId = url.slice(url.indexOf("profiles") + 9);

  if (profileId[profileId.length - 1] === '/') {
    profileId = profileId.slice(0, profileId.length - 1);
  }

  const profiles = [];
  const articles = [];
  const performances = [];
  const authors = {};

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [profileId]);

  useEffect(() => {
    (async () => {
      {
        data.allMarkdownRemark.nodes.map((info, index) => {
          if (info.frontmatter.type === "Profile") {
            profiles.push({...info.frontmatter, index})
            authors[info.frontmatter.userID] = info;
          } else if (info.frontmatter.type === "Article") {
            if (info.frontmatter.userIDs.indexOf(profileId) !== -1) {
              articles.push({...info.frontmatter, index})
            }
          } else if (info.frontmatter.type === "Performance") {
            if (info.frontmatter.userIDs.indexOf(profileId) !== -1) {
              performances.push({ ...info.frontmatter, index })
            }
          }
        })
      }

      
      let Profile = {};
      for (let i = 0; i < profiles.length; i++) {
        if (profiles[i].slug.slice(10) === profileId) {
          profiles[i]["html"] = data.allMarkdownRemark.nodes[profiles[i].index].html;

          Profile["profiles"] = [profiles[i]];
          break;
        }
      }

      performances.forEach(performance => {
        const authorList = [];
        performance.userIDs.forEach(ID => {
          authorList.push(authors[ID].frontmatter);
        })
        performance.authors = authorList;
      });

      const ArticleList = articles.map(article => ArticleDetailsMapper({"articles": [article]}, false, false));
      setArticlesDetails([...ArticlesDetails, ...ArticleList])

      const PerformanceList = performances.map(performance => PerformanceDetailsMapper({ "performances": [performance] }, false));
      setPerformancesDetails([...PerformancesDetails, ...PerformanceList])

      setProfileDetails(ProfileDetailsMapper(Profile));
    })();
  }, [profileId]);

  const createArticleIssues = () => {
    if (ArticlesDetails.length === 0) return;
    
    const issues = {};

    ArticlesDetails.forEach((article, index) => {
      if (!issues.hasOwnProperty(article.Issue)) {
        issues[article.Issue] = [];
      } 

      issues[article.Issue].push(<ArticlePreview 
        key={index} Image={article.Image} Title={article.Title} Issue={article.Issue} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject} includeAuthor={false}
      />)
    })

    const content = [];
    const keys = Object.keys(issues).map(issue => Number(issue));
    for (let i = Math.min(...keys); i <= Math.max(...keys); i++) {
      if (issues.hasOwnProperty(i)) {
        content.push(<div className="issueArticles">{issues[i].map(article => article)}</div>)
      }
    }

    return <div className="article-list">
      <h2>Articles</h2>
      <div className="issues">
        {content}
      </div>
    </div>
  }

  const createPerformanceIssues = () => {
    if (PerformancesDetails.length === 0) return;

    const issues = {};

    PerformancesDetails.forEach((performance, index) => {
      if (!issues.hasOwnProperty(performance.Issue)) {
        issues[performance.Issue] = [];
      }

      issues[performance.Issue].push(<PerformancePreview
        key={index} Image={performance.Image} Title={performance.Title} Composer={performance.Composer} Issue={performance.Issue} Authors={performance.Authors} LinkTo={performance.LinkTo}
      />)
    })

    const content = [];
    const keys = Object.keys(issues).map(issue => Number(issue));
    for (let i = Math.min(...keys); i <= Math.max(...keys); i++) {
      if (issues.hasOwnProperty(i)) {
        content.push(<div className="issuePerformances">{issues[i].map(performance => performance)}</div>)
      }
    }

    return <div className="performance-list">
      <h2>Performances</h2>
        <div className="issues">
          {content}
        </div>
    </div>
  }

  const image = () => (typeof (ProfileImage(ProfileDetails)) === "string") ? ProfileImage(ProfileDetails) : ProfileImage(ProfileDetails).default;

  return (ProfileDetails ?
    <>
      <SEO seo={{
        ..._.ProfileDetails.SEO,
        title: `Asteria | ${ProfileName(ProfileDetails)}`,
        image: image(),
        url
      }} />
      <Navbar />
      <main className="profileDetails">
        <div className="details">
          <div className="top">
            <div className="profilePicture">
              <img 
                src={image()} 
                alt={`profile picture of ${ProfileName(ProfileDetails)}`}>
              </img>
            </div>
            <div className="authorDetails">
              <div className="name">
                <h1>{ProfileName(ProfileDetails)}</h1> 
                <p>{ProfilePronouns(ProfileDetails)}</p>
              </div>
              <p>{ProfileSchool(ProfileDetails)}</p>
              <p>{ProfileRole(ProfileDetails).join(', ')}</p>
            </div>
            <div className="schoolPicture">
              <a href={schoolURLs[ProfileSchool(ProfileDetails)]} target="_blank" rel="noreferrer">
                <img 
                  src={(typeof(SchoolImage(ProfileDetails)) === "string") ? SchoolImage(ProfileDetails) : SchoolImage(ProfileDetails).default} 
                  alt={`Logo of ${ProfileSchool(ProfileDetails)}`}>
                </img>
              </a>
            </div>
          </div>
          <div className="content" dangerouslySetInnerHTML={{__html: ProfileMarkdown(ProfileDetails)}}></div>
        </div>
        {createArticleIssues()}
        {createPerformanceIssues()}
      </main>
      <Footer />
    </> : null
  );
};

export default ProfileDetails;
export const pageQuery = graphql`
  query profileQuery1 {
    allMarkdownRemark{
      nodes{
        html
        frontmatter {
          type
          first_name
          surname
          school
          pronouns
          role
          slug
          profile_picture
          title
          composer
          subject
          userID
          articleID
          userIDs
          preview_image
          issue
        }
      
      }
    }
  }
`