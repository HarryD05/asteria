//Importing React Dependencies
import * as React from "react"

//Importing components
import Navbar from "../components/navbar";
import SEO from './../components/seo';

//Importing constants
import _ from './../constants/constants';

import './../styles/index.scss';

const AboutPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <SEO seo={_.About.SEO} />

        <h1>About</h1>
      </main>
    </>
  )
}

export default AboutPage;
