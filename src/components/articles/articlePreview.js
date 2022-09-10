//Import React dependencies
import React from "react";

//Importing constants
import _ from "./../../constants/constants"

import "./../../styles/index.scss";

const ArticlePreview = ({ Image, Subject, Title, Author, LinkTo, IsVideo, includeAuthor=true }) => { 
  const classes = () => `articlePreview bg${Subject}-light ${(includeAuthor ? '' : 'noAuthor')}`;

  return (
    <a href={LinkTo} className={classes()}>
      <div className="top">
        {IsVideo ? <p>Video</p> : null}
        <div className="img">
          <img 
            src={(typeof(Image) === "string") ? Image : Image.default} 
            alt={`Preview picture for article: ${Title}`}>
          </img>
        </div>
      </div>
      <div className="articleDetail">
        <h2>{Title}</h2> 
        {includeAuthor ? <p>{`${Author.first_name} ${Author.surname}`}</p> : <p></p>}
      </div>
    </a>
  )
};

export default ArticlePreview;