import React, { useState} from 'react'
import { social } from './0-Data';

const Footer = () => {
  const [title, setTitle] = useState("Jeff Wang.")
  const [subtitle, setSubtitle] = useState("© 2022 All Rights Reserved")

  return (
    <footer id = "contact">
      <h3>{title}</h3>
      <div className="footer-links">
        {social.map((social) => {
          return (
            <a 
              key={social.id}
              href={social.url} 
              target="_"
              className='icon'
              onMouseEnter={() => setTitle(social.header)}
              onMouseLeave={() => setTitle("Jeff Wang.")}
            >{social.icon}</a>
          );
        })}
      </div>
      <a href="https://github.com/jeffwang4321" target="_" onMouseEnter={() => setSubtitle("Built with 💙 by Jeff Wang")} onMouseLeave={() => setSubtitle("© 2022 All Rights Reserved")}>{subtitle}</a>
    </footer>
  );
};

export default Footer;
