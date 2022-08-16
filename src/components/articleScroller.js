//Import React dependencies
import React from "react";

//Importing constants
import _ from "./../constants/constants";

import "./../styles/index.scss";

const subjects = [
  [`2BB760`, `Biology & Chemistry`],
  [`9C2111`, `Physics & Technology`],
  [`BFAA34`, `Econ &  Business`],
  [`C8792C`, `Humanities`],
  [`622058`, `Music`],
  [`376B70`, `Art & Media`],
  [`AF70BD`, `Literature & Philosophy`],
  [`CDCEED`, `Politics & Philosophy`],
  [`3E5FCA`, `Maths`],
]

const ArticleScroller = () => { 
  return (
    <div className="articleScroller">
      {subjects.map((subject, index) => {
        return <a className="subject-hover" key={index} href={ `#${subject[0]}`} style={{top: `${105 + 30 * index}px`}}>
          <div className={`circle bg${subject[0]}`}></div>
          <p>{`${subject[1]}`}</p>
        </a>
      })}
    </div>
  )
};

export default ArticleScroller;