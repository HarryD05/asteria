//Import React dependencies
import React from "react";

//Importing constants
import _ from "../../constants/constants"

import "./../../styles/index.scss";

const PerformancePreview = ({ Image, Title, Composer, Issue, Authors, LinkTo }) => { 
  const classes = () => `performancePreview bgPERF-light`;

  return (
    <a href={LinkTo} className={classes()}>
      {Issue !== undefined ? <p className="issue">Issue {Issue}</p> : null}
      <div className="top">

        <div className="img">
          <img 
            src={(typeof(Image) === "string") ? Image : Image.default} 
            alt={`Preview picture for performance: ${Title}`}>
          </img>
        </div>
      </div>
      <div className="performanceDetail">
        <h2>{Title}</h2> 
        <div className="composer"><em>{Composer}</em></div>
        <div className="authors">{Authors.map(author => {
          return <p>{(author.Name ? author.Name: `${author.first_name} ${author.surname}`)}</p>;
        })}</div>
      </div>
    </a>
  )
};

export default PerformancePreview;

//{IsVideo ? <p className="video">Video</p> : null}