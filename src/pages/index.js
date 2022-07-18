//Importing React Dependencies
import * as React from "react"

//Importing components
import Navbar from "../components/navbar";
import SEO from './../components/seo';

//Importing constants
import _ from './../constants/constants';

import './../styles/index.scss';

const IndexPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="home">
        <SEO seo={_.Home.SEO} />

        <h1>Homepage</h1>
        <p>Article showcase</p>
        <p>Article archive - chronological order</p>
      </main>
    </>
  )
}

export default IndexPage
