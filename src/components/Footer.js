import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "./Layout";

export const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-container flex">
          <div class="flex links">
            <h3>Links</h3>
            <ul class="flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div class="flex socials">
            <h3>Socials</h3>
            <ul class="flex">
              <li>
                <Link to="">LinkedIn</Link>
              </li>
              <li>
                <Link to="">Github</Link>
              </li>
              <li>
                <Link to="">Twitter</Link>
              </li>
              <li>
                <Link to="">Youtube</Link>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">&copy;All right reserved.</div>
      </footer>
    </>
  );
};
