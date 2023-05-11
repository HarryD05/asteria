//Importing React Dependencies
import React, {useState, useEffect} from "react"

//Importing constants
import _ from './../constants/constants';

//Importing components
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import SEO from './../components/seo';
import ProfilePreview from "./../components/profiles/profilePreview";
import LoadingSpinner from "../components/loading";

//Importing helpers
import {ProfilesMapper} from './../components/profiles/profileHelperFunctions';

import { graphql } from "gatsby";

import './../styles/index.scss';

const MeetTheTeamPage = ({data}) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [])

  useEffect(() => {
    const profileList = [];
    data.allMarkdownRemark.nodes.forEach(profile => {
      if (profile.frontmatter.type === "Profile") {
        profileList.push(profile.frontmatter); //Update query to just get profiles
      }
    })

    setProfiles(profileList);
  }, [data])

  const displayArticleRoles = () => {
    const profileList = ProfilesMapper(profiles);

    if (profileList === 0) {
      return <LoadingSpinner />
    }

    const roles = {
      "Co-ordinator": [],
      "Designer": [],
      "Editor": [],
      "Writer": []
    }

    profileList.forEach(profile => {
      if (profile.Role.includes("Co-ordinator") || profile.Role.includes("Abbey Co-ordinator") || profile.Role.includes("Kendrick Co-ordinator")) {
        roles["Co-ordinator"].push(profile);
      } else if (profile.Role.includes("Designer")) {
        roles["Designer"].push(profile);
      } else if (profile.Role.includes("Editor")) {
        roles["Editor"].push(profile);
      } else if (profile.Role.includes("Writer")) {
        roles["Writer"].push(profile);
      }
    })

    const output = []

    for (const key of ["Co-ordinator", "Designer", "Editor", "Writer"]) {
      const roleOutput = []
      let roleList = roles[key];
      roleList = roleList.sort((a, b) => {
        if (a.Name > b.Name) {
          return 1;
        } 
        
        return -1;
        
      });

      if (roleList.length > 0) {
        roleOutput.push(roleList.map((profile, index) => {
          return <ProfilePreview
            key={index}
            Name={profile.Name}
            Role={profile.Role.filter(role => role.indexOf("Co-ordinator") !== -1 || role === "Designer" || role.indexOf("Editor") !== -1 || role === "Writer")}
            Image={profile.Image}
            LinkTo={profile.LinkTo}
            Subject={profile.Subject}
          />
        }));
      } else {
        roleOutput.push(<p>No profiles...</p>)
      }

      output.push(<div class="role"><h2>{key}s</h2><div class="profiles">{roleOutput}</div></div>)
    }

    return output;
  }

  const displayPerformanceRoles = () => {
    const profileList = ProfilesMapper(profiles);

    if (profileList === 0) {
      return;
    }

    const roles = {
      "Performances lead": [],
      "Performer": []
    }

    profileList.forEach(profile => {
      if (profile.Role.includes("Performances lead")) {
        roles["Performances lead"].push(profile);
      } else if (profile.Role.includes("Performer")) {
        roles["Performer"].push(profile);
      } 
    })

    const output = []

    for (const key of ["Performances lead", "Performer"]) {
      const roleOutput = []
      let roleList = roles[key];
      roleList = roleList.sort((a, b) => {
        if (a.Name > b.Name) {
          return 1;
        }

        return -1;

      });

      if (roleList.length > 0) {
        roleOutput.push(roleList.map((profile, index) => {
          return <ProfilePreview
            key={index}
            Name={profile.Name}
            Role={[]}
            Image={profile.Image}
            LinkTo={profile.LinkTo}
            Subject={profile.Subject}
          />
        }));
      } else {
        roleOutput.push(<p>No profiles...</p>)
      }

      output.push(<div class="role"><h2>{key}s</h2><div class="profiles">{roleOutput}</div></div>)
    }

    return output;
  }

  return (
    <>
      <Navbar />
      <main className="MTT">
        <SEO seo={_.MeetTheTeam.SEO} />
      
        <div className="all-profiles">
          <h1>Articles team</h1>
          {displayArticleRoles()}

          <h1>Performances team</h1>
          {displayPerformanceRoles()}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MeetTheTeamPage;
export const pageQuery = graphql`
query profileQuery2{
  allMarkdownRemark{
    nodes{
      frontmatter {
        type
        first_name
        surname
        role
        profile_picture
        slug
      }
    }
  }
}
`