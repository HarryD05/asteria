//Import React dependencies
import React from "react";

//Importing constants
import _ from "./../../constants/constants"

import "./../../styles/index.scss";

const ArticlePreview = ({ Image, Subject, Title, Author, LinkTo, includeAuthor=true }) => { 
  return (
    <a href={LinkTo} className={`articlePreview bg${Subject}-light`}>
      <img 
        src={(typeof(Image) === "string") ? Image : Image.default} 
        alt={`Preview picture for article: ${Title}`}>
      </img>
      <div className="details">
        <h2>{Title}</h2> 
        {includeAuthor ? <p>{Author}</p> : <p></p>}
      </div>
    </a>
  )
};

export default ArticlePreview;