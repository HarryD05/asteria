//Importing React Dependencies
import React, {useState, useEffect} from 'react';

//Importing components
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SEO from '../components/seo';
import LoadingSpinner from '../components/loading';

//Importing constants
import _ from '../constants/constants';

//Importing helpers
import { PerformancesMapper } from '../components/performances/performanceHelperFunctions';
import PerformancePreview from '../components/performances/performancePreview';
import { ProfilesMapper } from '../components/profiles/profileHelperFunctions';
import ProfilePreview from '../components/profiles/profilePreview';

import './../styles/index.scss';

import { graphql } from 'gatsby';

const PerformancesPage = ({data}) => {
  const [performances, setPerformances] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  useEffect(() => {
    const performanceList = [];
    const profileList = [];
    const authors = {};

    data.allMarkdownRemark.nodes.forEach(info => {
      info = info.frontmatter;

      if (info.type === "Performance") {
        performanceList.push(info);
      } else if (info.type === "Profile") {
        authors[info.userID] = info;
        profileList.push(info);
      }
    });

    performanceList.forEach(performance => {
      const authorList = [];
      performance.userIDs.forEach(ID => {
        authorList.push(authors[ID]);
      })
      performance.authors = authorList;
    });

    setPerformances(performanceList);
    setProfiles(profileList);
  }, [data])

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

  const createPerformances = () => {
    const performanceList = PerformancesMapper(performances);

    if (performanceList === 0) return <LoadingSpinner />;

    return <div className="previews">
      {performanceList.map((performance, index) => {
        return <PerformancePreview 
          key={index} Image={performance.Image} Title={performance.Title} Composer={performance.Composer} Issue={performance.Issue} Authors={performance.Authors} LinkTo={performance.LinkTo}
        />
      })}
      </div>
  }

  return (
    <>
      <Navbar />
      <main className="performances">
        <SEO seo={_.Performances.SEO} />
        <div className="MTT">
          <h1>Team</h1>
          <div className="all-profiles">{displayPerformanceRoles()}</div>
        </div>
        <div id="performance">
          <h1>Recordings</h1>
          {createPerformances()}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PerformancesPage;
export const pageQuery = graphql`
query performanceQuery2{
  allMarkdownRemark{
    nodes{
      frontmatter {
        type
        title
        composer
        description
        issue
        preview_image
        userIDs
        slug
        first_name
        surname
        userID
        role
        profile_picture
      }
    }
  }
}
`