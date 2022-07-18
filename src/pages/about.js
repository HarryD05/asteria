//Importing React Dependencies
import React from "react";

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
      <main className="about">
        <SEO seo={_.About.SEO} />

        <h1>About</h1>
      </main>
    </>
  )
}

export default AboutPage;
