//Importing React dependencies
import React, {useEffect, useState} from "react";

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

const SideDrawer = ({isOpen, isDark}) => {
  const socialClasses = () => isDark ? 'invert' : 'noinvert' ;
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
          <img className={socialClasses()} src={InstagramLogo} alt="Instagram logo"></img>
          <img className={socialClasses()} src={TwitterLogo} alt="Twitter logo"></img>
          <img className={socialClasses()} src={FacebookLogo} alt="Facebook logo"></img>
        </div>
      </div>
    </>
  )
}

const Navbar = () => {
  const checkDark = () => {
    if (localStorage.getItem('isDark') == undefined) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        localStorage.setItem('isDark', '1');
        document.body.setAttribute('data-theme', 'dark');
        setIsDark(true);
      } else {
        localStorage.setItem('isDark', '0');
        document.body.removeAttribute('data-theme');
        setIsDark(false);
      }
    } else if (window.localStorage.getItem('isDark') === '1') {
      document.body.setAttribute('data-theme', 'dark');
      setIsDark(true);
    } else {
      document.body.removeAttribute('data-theme');
      setIsDark(false);
    }
  }

  const [sideOpen, setSideOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    checkDark();
  }, [])

  const toggleSideOpen = e => {
    setSideOpen(!sideOpen);
  }

  const toggleDarkMode = () => {
    if (localStorage.getItem('isDark') === '0') {
      window.localStorage.setItem('isDark', '1'); 
      document.body.setAttribute('data-theme', 'dark');
      setIsDark(true);
    } else {
      localStorage.setItem('isDark', '0'); 
      document.body.removeAttribute('data-theme');
      setIsDark(false);
    }
  } 

  const socialClasses = () => isDark ? 'invert' : 'noinvert' ;

  return (
    <div className="navbar">
      <DrawerToggleButton isOpen={sideOpen} click={toggleSideOpen}></DrawerToggleButton>
      <SideDrawer isDark={isDark} isOpen={sideOpen}></SideDrawer>
      <div className="contents">
        <div className="logo">
          <a href="/"><img src={Logo} alt="Gatsby logo"></img></a>
        </div>
        <div className="pages">
          <a href="/categories">Categories</a>
          <a href="/meet-the-team">Meet the Team</a>
          <a href="/about">About</a>
        </div>
        <div className="social-media">
          <img className={socialClasses()} src={InstagramLogo} alt="Instagram logo"></img>
          <img className={socialClasses()} src={TwitterLogo} alt="Twitter logo"></img>
          <img className={socialClasses()} src={FacebookLogo} alt="Facebook logo"></img>
        </div>
      </div>
      <button className="dark-btn" onClick={toggleDarkMode}><div className={`icon ${isDark ? 'invert': 'noinvert'}`}></div></button>
    </div>
  );
}

export default Navbar;