//Importing React Dependencies
import * as React from "react"

//Importing constants
import _ from './../constants/constants';

//Importing components
import Navbar from "./../components/navbar";
import SEO from './../components/seo';
import ProfilePreview from "../components/profilePreview";

//Importing helpers
import {ProfilesMapper} from './../components/profileHelperFunctions';

import { graphql } from "gatsby";

import './../styles/index.scss';

const MeetTheTeamPage = ({data}) => {
  const [selected, setSelected] = React.useState({
    editor: true, designer: true, writer: true
  });
  const [profiles, setProfiles] = React.useState([])

  React.useEffect(() => {
    const profileList = [];
    data.allMarkdownRemark.edges.forEach(profile => {
      profile = profile.node.frontmatter;

      let display = false;
      Object.keys(selected).forEach(key => {
        if (selected[key] && profile.role.toLowerCase() === key) {
          display = true;
        }
      })

      if (display) {
        profileList.push(profile);
      } 
    })
    setProfiles(profileList);
  }, [selected])

  const displayProfiles = () => {
    if (profiles.length > 0) {
      return ProfilesMapper(profiles).map((profile, index) => {
        return <ProfilePreview 
          key={index} 
          Name={profile.Name}
          Role={profile.Role}
          Image={profile.Image}
          LinkTo={profile.LinkTo}
        />
      });
    } else {
      return <p>No profiles...</p>
    }
  }

  const changeSelector = e => {
    const role = e.target.value;
    setSelected({
      ...selected,
      [role]: !selected[role]
    })
  }

  const getClass = role => {
    return (selected[role] ? 'shown' : 'hidden')
  }

  return (
    <>
      <Navbar></Navbar>
      <main className="MTT">
        <SEO seo={_.MeetTheTeam.SEO} />

        <h1>Meet the Team</h1>
        
        <div className="selector">
          <button className={getClass("writer")} onClick={changeSelector} value="writer">Writers</button>
          <button className={getClass("editor")} onClick={changeSelector} value="editor">Editors</button>
          <button className={getClass("designer")} onClick={changeSelector} value="designer">Designers</button>
        </div>

        <div className="profiles">
          {displayProfiles()}
        </div>
      </main>
    </>
  )
}

export default MeetTheTeamPage;
export const pageQuery = graphql`
query profileQuery2{
  allMarkdownRemark(
    limit: 100
  ){
    edges{
      node{
        frontmatter {
          first_name
          surname
          role
          profile_picture
          slug
        }
      }
    }
  }
}
`