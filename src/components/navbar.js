//Importing React dependencies
import React, {useEffect, useState} from "react";

//Importing assets
import InstagramLogo from "./../assets/images/social-media-logos/Instagram.png";
import LinkedInLogo from "./../assets/images/social-media-logos/LinkedIn.png";
import SettingsLogo from "./../assets/images/settings.png";
import BackArrow from "./../assets/images/go-back-arrow.png"

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

const SideDrawer = ({isOpen, isDark, click}) => {
  const socialClasses = () => isDark ? 'invert' : 'noinvert' ;
  const sideClasses = () => `sideDrawer ${isOpen ? 'show': 'hide'}`;
  const bdClasses = () => `backdrop ${isOpen ? 'show': 'hide'}`;

  const displaySettingsSidebar = () => {
    if (typeof document !== "undefined") {
      if (document.location.pathname.includes("settings")) {
        return <a onClick={() => window.history.back()} className="settingsBinder"><img className={`${socialClasses()} settings`} src={BackArrow} alt="Back arrow"></img></a>
      } else {
        return <a href="/settings"><img className={`${socialClasses()} settings`} src={SettingsLogo} alt="Settings"></img></a>
      }
    }
  }

  return (
    <>
      <div className={bdClasses()} onclick={click}></div>
      <div className={sideClasses()}>
        
        <div className="pages">
          <a href="/articles">Articles</a>
          <a href="/meet-the-team">Meet the Team</a>
          <a href="/about">About</a>
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/the_asteria_magazine/" target="_blank" rel="noreferrer"><img className={socialClasses()} src={InstagramLogo} alt="Instagram logo"></img></a>
          {displaySettingsSidebar()}
          <a href="https://www.linkedin.com/company/theasteriamagazine/" target="_blank" rel="noreferrer"><img className={socialClasses()} src={LinkedInLogo} alt="LinkedIn logo"></img></a>
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

  const checkFont = () => {
    if (localStorage.getItem('font-size') === null) {
      document.body.setAttribute('font-size', 16);
      localStorage.setItem('font-size', 16);
    } else {
      document.body.setAttribute('font-size', localStorage.getItem('font-size'))
    }
    if (localStorage.getItem('dyslexia') === null) {
      document.body.setAttribute('dyslexia', 0);
      localStorage.setItem('dyslexia', 0);
    } else {
      document.body.setAttribute('dyslexia', localStorage.getItem('dyslexia'))
    }
  }

  const [sideOpen, setSideOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    checkDark();
    checkFont();
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

  const invertClasses = () => isDark ? 'invert' : 'noinvert' ;

  const scrollUp = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const displaySettingsNavbar = () => {
    if (typeof document !== "undefined") {
      if (document.location.pathname.includes("settings")) {
        return <a onClick={() => window.history.back()} className="settingsBinder"><img className={`${invertClasses()} settings`} src={BackArrow} alt="Back arrow"></img></a>
      } else{
        return <a href="/settings" className="settingsBinder"><img className={`${invertClasses()} settings`} src={SettingsLogo} alt="Settings gear"></img></a>
      } 
    }
  }

  return (
    <div className="navbar">
      <DrawerToggleButton isOpen={sideOpen} click={toggleSideOpen}></DrawerToggleButton>
      <SideDrawer isDark={isDark} isOpen={sideOpen} click={toggleSideOpen}></SideDrawer>
      <div className="contents">
        <div className="logo"><a href="/" className="logo-img"></a></div>
        <div className="pages">
          <a href="/articles">Articles</a>
          <a href="/meet-the-team">Meet the Team</a>
          <a href="/about">About</a>
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/the_asteria_magazine/" target="_blank" rel="noreferrer"><img className={invertClasses()} src={InstagramLogo} alt="Instagram logo"></img></a>
          <a href="https://www.linkedin.com/company/theasteriamagazine/" target="_blank" rel="noreferrer"><img className={invertClasses()} src={LinkedInLogo} alt="LinkedIn logo"></img></a>
          {displaySettingsNavbar()}
        </div>
      </div>
      <button className="dark-btn" onClick={toggleDarkMode}><div className={`icon ${isDark ? 'invert': 'noinvert'}`}></div></button>
      <button className="up-btn" onClick={scrollUp}>↑</button>
    </div>
  );
}

export default Navbar;