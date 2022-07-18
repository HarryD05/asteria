//Importing React dependencies
import React from "react";

//Importing assets
import Logo from "./../assets/images/GatsbyLogo.png";
import InstagramLogo from "./../assets/images/social-media-logos/Instagram.png";
import TwitterLogo from "./../assets/images/social-media-logos/Twitter.png";
import FacebookLogo from "./../assets/images/social-media-logos/Facebook.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="contents">
        <a href="/"><img src={Logo} alt="Gatsby logo"></img></a>
        <div className="pages">
          <a href="/categories">Categories</a>
          <a href="/meet-the-team">Meet the Team</a>
          <a href="/about">About</a>
        </div>
        <div className="social-media">
          <img src={InstagramLogo} alt="Instagram logo"></img>
          <img src={TwitterLogo} alt="Twitter logo"></img>
          <img src={FacebookLogo} alt="Facebook logo"></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;