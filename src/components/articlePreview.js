//Import React dependencies
import React from "react";

//Importing constants
import _ from "./../constants/constants";

import "./../styles/index.scss";

const ArticlePreview = ({ Image, Subject, Title, Author, LinkTo }) => { 
  return (
    <div className={`articlePreview bg${Subject}-light`}>
      <a href={LinkTo}>
        <img src={Image} alt={`Preview picture for article: ${Title}`}></img>
        <div className="details">
          <h2>{Title}</h2> 
          <p>{Author}</p>
        </div>
      </a>
    </div>
  )
};

export default ArticlePreview;