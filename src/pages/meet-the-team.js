//Importing React Dependencies
import * as React from "react"

//Importing components
import Navbar from "../components/navbar";
import SEO from './../components/seo';

//Importing constants
import _ from './../constants/constants';

import './../styles/index.scss';

const MeetTheTeamPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <SEO seo={_.MeetTheTeam.SEO} />

        <h1>Meet the Team</h1>
        <p>Role selector (Editor, writer, designer, all)</p>
        <p>Profile gallery (Photo, name, roles)</p>
      </main>
    </>
  )
}

export default MeetTheTeamPage;
