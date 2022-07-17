//Importing React Dependencies
import * as React from "react"

//Importing components
import Navbar from "../components/navbar";
import SEO from './../components/seo';

//Importing constants
import _ from './../constants/constants';

import './../styles/index.scss';

const CategoriesPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <SEO seo={_.Categories.SEO} />

        <h1>Categories</h1>
        <p>Persistent side selector (Coloured circle buttons to scroll to subject section)</p>
        <p>Categories (Title followed by horizontal scroller of articles)</p>
      </main>
    </>
  )
}

export default CategoriesPage;
