//Importing React Dependencies
import React, { useState, useEffect } from "react";

//Importing components
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import SEO from "./../components/seo";

//Importing constants
import _ from "./../constants/constants";

import "./../styles/index.scss";
import SettingsContent from "../components/settingsContent";

const SettingsPage = () => {
  return (
    <>
      <Navbar />
      <main className="settingsPage">
        <SEO seo={_.Settings.SEO} />

        <h1>Settings</h1>

        <p>These settings only affect the article text</p>

        <SettingsContent />
      </main>
      <Footer />
    </>
  )
}


export default SettingsPage;