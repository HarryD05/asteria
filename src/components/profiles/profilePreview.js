//Import React dependencies
import React, { useEffect, useState, useRef } from "react";

//Importing constants
import _ from "./../../constants/constants";

import "./../../styles/index.scss";

const ProfilePreview = ({ Image, Name, Role, LinkTo }) => { 
  return (
    <div className="profilePreview">
      <a href={LinkTo}>
        <img 
          src={(typeof(Image) === "string") ? Image : Image.default} 
          alt={`profile picture of ${Name}`}>
        </img>
        <div className="details">
          <h2>{Name}</h2> 
          <p>{Role}</p>
        </div>
      </a>
    </div>
  )
};

export default ProfilePreview;