//Import React dependencies
import React from "react";

//Importing constants
import _ from "../../constants/constants"

import "./../../styles/index.scss";

const PerformancePreview = ({ Image, Title, Issue, Authors, LinkTo, includeAuthor=true }) => { 
  const classes = () => `performancePreview ${(includeAuthor ? '' : 'noAuthor')}`;

  return (
    <a href={LinkTo} className={classes()}>
      {Issue !== undefined ? <p className="issue">{Issue}</p> : null}
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
        {includeAuthor ? <div className="authors">{Authors.map(author => {
          return <p>{`${author.first_name} ${author.surname}`}</p>;
        })}</div> : <p></p>}
      </div>
    </a>
  )
};

export default PerformancePreview;

//{IsVideo ? <p className="video">Video</p> : null}