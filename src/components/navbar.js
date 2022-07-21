//Importing React dependencies
import React, {useState, useEffect} from "react";

//Importing assets
import Logo from "./../assets/images/GatsbyLogo.png";
import InstagramLogo from "./../assets/images/social-media-logos/Instagram.png";
import TwitterLogo from "./../assets/images/social-media-logos/Twitter.png";
import FacebookLogo from "./../assets/images/social-media-logos/Facebook.png";

const DrawerToggleButton = ({click, isOpen}) => {
  const classes = () => `toggle-btn ${isOpen ? 'side': 'normal'}`;

  return (
    <div className={classes()} onClick={click}>
      <div className="toggle-btn-line top" />
      <div className="toggle-btn-line middle" />
      <div className="toggle-btn-line bottom" />
    </div>
  )
}

const SideDrawer = ({isOpen}) => {
  const sideClasses = () => `sideDrawer ${isOpen ? 'show': 'hide'}`;
  const bdClasses = () => `backdrop ${isOpen ? 'show': 'hide'}`;

  return (
    <>
      <div className={bdClasses()}></div>
      <div className={sideClasses()}>
        
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
    </>
  )
}

const Navbar = () => {
  const [sideOpen, setSideOpen] = useState(false);

  const toggleSideOpen = e => {
    setSideOpen(!sideOpen);
  }

  useEffect(() => {
    if (localStorage.getItem('isDark') == undefined) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        localStorage.setItem('isDark', '1');
        document.body.setAttribute('data-theme', 'dark');
      } else {
        localStorage.setItem('isDark', '0');
        document.body.removeAttribute('data-theme');
      }
    } else if (localStorage.getItem('isDark') === '1') {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [])

  const toggleDarkMode = () => {
    if (localStorage.getItem('isDark') === '0') {
      localStorage.setItem('isDark', '1'); 
      document.body.setAttribute('data-theme', 'dark');
    } else {
      localStorage.setItem('isDark', '0'); 
      document.body.removeAttribute('data-theme');
    }
  } 

  return (
    <div className="navbar">
      <DrawerToggleButton isOpen={sideOpen} click={toggleSideOpen}></DrawerToggleButton>
      <SideDrawer isOpen={sideOpen}></SideDrawer>
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
      <button className="dark-btn" onClick={toggleDarkMode}>Toggle</button>
    </div>
  );
}

export default Navbar;