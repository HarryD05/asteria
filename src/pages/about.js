//Importing React Dependencies
import React from "react";

//Importing components
import Navbar from "../components/navbar";
import SEO from './../components/seo';
import Footer from "./../components/footer";

//Importing constants
import _ from './../constants/constants';

import './../styles/index.scss';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="about">
        <SEO seo={_.About.SEO} />

        <h1>About</h1>
      </main>
      <Footer />
    </>
  )
}

export default AboutPage;
