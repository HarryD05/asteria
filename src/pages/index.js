//Importing React Dependencies
import * as React from "react"

//Importing components
import SEO from './../components/seo';

//Importing constants
import _ from './../constants/constants';

const IndexPage = () => {
  console.log(_.Home.SEO);

  return (
    <main>
      <SEO seo={_.Home.SEO} />

      <h1>STEAM</h1>
    </main>
  )
}

export default IndexPage
