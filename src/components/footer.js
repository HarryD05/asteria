//Importing React dependencies
import React from "react";

//Importing assets
import InstagramLogo from "./../assets/images/social-media-logos/Instagram.png";
import LinkedInLogo from "./../assets/images/social-media-logos/LinkedIn.png";
import FacebookLogo from "./../assets/images/social-media-logos/Facebook.png";
import ReadingSchoolLogo from "./../assets/images/schools/ReadingSchool.png";
import KendrickSchoolLogo from "./../assets/images/schools/Kendrick.png";

import "./../styles/index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="socialMedia">
          <img src={InstagramLogo} alt="Instagram logo"></img>
          <a href="https://www.linkedin.com/company/theasteriamagazine/" target="_blank" rel="noreferrer"><img src={LinkedInLogo} alt="LinkedIn logo"></img></a>
          <img src={FacebookLogo} alt="Facebook logo"></img>
        </div>
        <div className="buttons">
          <a onClick={() => alert('Not setup yet')}>Contact us</a>
          <a href="https://forms.office.com/r/T07YM8j0Y0" target="_blank" rel="noreferrer">Feedback</a>
        </div>
        <div className="schools">
          <a href="https://www.kendrick.reading.sch.uk/" target="_blank" rel="noreferrer">
            <img src={KendrickSchoolLogo} alt="Kendrick logo" title="Kendrick School"></img>
          </a>
          <a href="https://www.reading-school.co.uk/" target="_blank" rel="noreferrer">
            <img src={ReadingSchoolLogo} alt="Reading School logo" title="Reading School"></img>
          </a>
        </div>
      </div>
      <p>&#169; 2022 Asteria | All Rights Reserved</p>
    </div>
  );
}

export default Footer;