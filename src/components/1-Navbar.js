import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./0-Data";
import ThemeButton from "./ThemeButton";
import "../styles/1-Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>
            <span>JEFF</span> WANG.
          </h2>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars className="menu-icon" style={{transform: `rotate(${showLinks ? '90deg' : '0'})`}}/>
            {/* {
              showLinks ? <FaBars style={{transform: 'rotate(9deg)'}}/> : <FaBars style={{transform: 'rotate(0)'}}/>
            } */}
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <h4>
                    <a href={url} onClick={toggleLinks}>
                      {text}
                    </a>
                  </h4>
                </li>
              );
            })}
            <li>
              <ThemeButton />
            </li>
          </ul>
        </div>
        
        {/* <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url} target="_">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
