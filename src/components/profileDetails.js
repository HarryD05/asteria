//Import React dependencies
import React, { useEffect, useState, useRef } from "react";
import Markdown from "markdown-to-jsx";

//Importing constants
import _ from "./../constants/constants";

//Importing components
import SEO from "./seo";
import Navbar from "./navbar";

//Importing helpers
import {ProfileDetailsMapper, ProfileMarkdown, ProfileImage, ProfileName, ProfilePronouns, ProfileRole, ProfileSchool} from './profileHelperFunctions';

import { graphql } from "gatsby";

import "./../styles/index.scss";

const ProfileDetails = ({ data }) => {

  const url = typeof window !== 'undefined' ? window.location.href.split(/[?#]/)[0] : '';

  const [ProfileDetails, setProfileDetails] = useState(null);
  const profileId = url.slice(url.indexOf("profiles") + 9);

  const profiles = [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [profileId]);


  useEffect(() => {
    (async () => {
      {
        data.allMarkdownRemark.edges.map(profile => (
          profiles.push(profile.node.frontmatter)
        ))
      }

      var Profile = {};
      for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].slug.slice(10) === profileId) {
          profiles[i]["html"] = data.allMarkdownRemark.edges[i].node.html;

          Profile["profiles"] = [profiles[i]];
          break;
        }
      }

      setProfileDetails(ProfileDetailsMapper(Profile));
    })();
  }, [profileId]);

  return (ProfileDetails ?
    <>
      <SEO seo={{
        ..._.ProfileDetails.SEO,
        title: ProfileName(ProfileDetails),
        image: ProfileImage(ProfileDetails),
        url
      }} />
      <main>
        <Navbar />
        <div className="profileDetails">
          <div className="top">
            <img src={ProfileImage(ProfileDetails)} alt={`profile picture of ${ProfileName(ProfileDetails)}`}></img>
            <div className="details">
              <div className="name">
                <h1>{ProfileName(ProfileDetails)}</h1> 
                <p>{ProfilePronouns(ProfileDetails)}</p>
              </div>
              <p>{ProfileSchool(ProfileDetails)}</p>
              <p>{ProfileRole(ProfileDetails)}</p>
            </div>
          </div>
          <Markdown>{ProfileMarkdown(ProfileDetails)}</Markdown>
          <br />
          <p>Content to add: Issues</p>
        </div>
      </main>
    </> : null
  );
};

export default ProfileDetails;
export const pageQuery = graphql`
  query profileQuery1 {
    allMarkdownRemark(limit: 1000){
      edges{
        node{
          html
          frontmatter {
            first_name
            surname
            id
            school
            pronouns
            role
            slug
            profile_picture
          }
        }
      }
    }
  }
`