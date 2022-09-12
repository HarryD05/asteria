//Import React dependencies
import React, { useEffect, useState, useRef } from "react";
import Markdown from "markdown-to-jsx";

//Importing constants
import _ from "./../../constants/constants";

//Importing components
import SEO from "./../seo";
import Navbar from "./../navbar";
import ArticlePreview from "./../articles/articlePreview";
import Footer from "./../footer";

//Importing helpers
import {ProfileDetailsMapper, ProfileMarkdown, ProfileImage, SchoolImage, ProfileName, ProfilePronouns, ProfileRole, ProfileSchool} from './profileHelperFunctions';
import {ArticleDetailsMapper} from './../articles/articleHelperFunctions';

import { graphql } from "gatsby";

import "./../../styles/index.scss";

const schoolURLs = {
  'Reading School': 'https://www.reading-school.co.uk/',
  'Kendrick School': 'https://www.kendrick.reading.sch.uk/'
}

const ProfileDetails = ({ data }) => {
  const url = typeof window !== 'undefined' ? window.location.href.split(/[?#]/)[0] : '';

  const [ProfileDetails, setProfileDetails] = useState(null);
  const [ArticlesDetails, setArticlesDetails] = useState([]);
  let profileId = url.slice(url.indexOf("profiles") + 9);

  if (profileId[profileId.length - 1] === '/') {
    profileId = profileId.slice(0, profileId.length - 1);
  }

  const profiles = [];
  const articles = [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [profileId]);

  useEffect(() => {
    (async () => {
      {
        data.allMarkdownRemark.edges.map((info, index) => {
          if (info.node.frontmatter.type === "Profile") {
            profiles.push({...info.node.frontmatter, index})
          } else {
            if (info.node.frontmatter.userIDs.indexOf(profileId) !== -1) {
              articles.push({...info.node.frontmatter, index})
            }
          }
        })
      }

      let Profile = {};
      for (let i = 0; i < profiles.length; i++) {
        if (profiles[i].slug.slice(10) === profileId) {
          profiles[i]["html"] = data.allMarkdownRemark.edges[profiles[i].index].node.html;

          Profile["profiles"] = [profiles[i]];
          break;
        }
      }

      const ArticleList = articles.map(article => ArticleDetailsMapper({"articles": [article]}, false, false));
      setArticlesDetails([...ArticlesDetails, ...ArticleList])

      setProfileDetails(ProfileDetailsMapper(Profile));
    })();
  }, [profileId]);

  const createIssues = () => {
    if (ArticlesDetails.length === 0) return <p>No articles...</p>
    
    const issues = {};

    ArticlesDetails.forEach((article, index) => {
      if (!issues.hasOwnProperty(article.Issue)) {
        issues[article.Issue] = [];
      } 

      issues[article.Issue].push(<ArticlePreview 
        key={index} Image={article.Image} Title={article.Title} Issue={article.Issue} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject} 
        includeAuthor={false} IsVideo={article.Video.IsVideo}
      />)
    })

    const content = [];
    const keys = Object.keys(issues).map(issue => Number(issue));
    for (let i = Math.min(...keys); i <= Math.max(...keys); i++) {
      if (issues.hasOwnProperty(i)) {
        content.push(<div className="issueArticles">{issues[i].map(article => article)}</div>)
      }
    }

    return content;
  }

  return (ProfileDetails ?
    <>
      <SEO seo={{
        ..._.ProfileDetails.SEO,
        title: `Asteria | ${ProfileName(ProfileDetails)}`,
        image: ProfileImage(ProfileDetails),
        url
      }} />
      <Navbar />
      <main className="profileDetails">
        <div className="details">
          <div className="top">
            <div className="profilePicture">
              <img 
                src={(typeof(ProfileImage(ProfileDetails)) === "string") ? ProfileImage(ProfileDetails) : ProfileImage(ProfileDetails).default} 
                alt={`profile picture of ${ProfileName(ProfileDetails)}`}>
              </img>
            </div>
            <div className="details">
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
          <Markdown className="content">{ProfileMarkdown(ProfileDetails)}</Markdown>
        </div>
        <div className="article-list">
          <h2>Articles</h2>
          <div className="issues">
            {createIssues()}
          </div>
        </div>
      </main>
      <Footer />
    </> : null
  );
};

export default ProfileDetails;
export const pageQuery = graphql`
  query profileQuery1 {
    allMarkdownRemark{
      edges{
        node{
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
            subject
            userID
            articleID
            userIDs
            preview_image
            video_url
            issue
          }
        }
      }
    }
  }
`