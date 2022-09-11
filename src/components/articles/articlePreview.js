//Import React dependencies
import React from "react";

//Importing constants
import _ from "./../../constants/constants"

import "./../../styles/index.scss";

const ArticlePreview = ({ Image, Subject, Title, Authors, LinkTo, IsVideo, includeAuthor=true }) => { 
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
        {includeAuthor ? <div className="authors">{Authors.map(author => {
          return <p>{`${author.first_name} ${author.surname}`}</p>;
        })}</div> : <p></p>}
      </div>
    </a>
  )
};

export default ArticlePreview;