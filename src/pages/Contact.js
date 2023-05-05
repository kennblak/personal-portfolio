import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

import "../styles/Contact.css";

 export const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact me</h1>
      <p>Connect with me on social media:</p>
      <ul>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100009280942306">
            <FacebookIcon /> Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com/your-page">
            <TwitterIcon /> Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/blv.ckmint_/">
            <InstagramIcon /> Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
