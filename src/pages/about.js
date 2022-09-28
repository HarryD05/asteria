//Importing React Dependencies
import React, {useEffect} from "react";

//Importing components
import Navbar from "../components/navbar";
import SEO from './../components/seo';
import Footer from "./../components/footer";

//Importing constants
import _ from './../constants/constants';

import './../styles/index.scss';

const AboutPage = () => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <>
      <Navbar />
      <main className="about">
        <SEO seo={_.About.SEO} />

        <div class="scrolling-words-container">
          <div class="scrolling-words-box">
            <ul>
              <li style={{ "color": "#ea4335" }}>Designed</li>
              <li style={{ "color": "#4285f4" }}>Written</li>
              <li style={{ "color": "#34a853" }}>Edited</li>
              <li style={{ "color": "#fbbc04" }}>Made</li>
              <li style={{ "color": "#ea4335" }}>Designed</li>
            </ul>
          </div>
          <span>for everyone</span>
        </div>

        <p>Welcome to Asteria!</p><br />
        <p>From a column on the inner workings of human physiology to critiques of renditions of Chopin, this is a safe platform for students to come forward and share their passions in academia.</p><br />
        <p>Throughout the production of this initiative, the opportunity to work with so many amazing personalities is a truly rewarding experience. The best part? We're just getting started.</p><br />
        <p>Our mission is to build collegial partnerships with the secondary schools we work with. In time, we hope to grow a community around this initiative.</p><br />
        <p>This project would be impossible without the contributions of Mudit, Arya, Harry, and our editors, who have dedicated their time and energy to present you with the breadth of knowledge on offer from our excellent writers.</p><br />
        <p>A big thank you to Reading and Kendrick School for their ongoing cooperation in this student-led initiative.</p><br />
        <p>If you would like to contribute or join us, feel free to contact myself or my peers.</p><br />
        <p class="author">Ram Gautham Kurakula</p>
      </main>
      <Footer />
    </>
  )
}

export default AboutPage;
