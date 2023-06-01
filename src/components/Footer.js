import React from "react";

export const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-container flex">
          <div class="flex links">
            <h3>Links</h3>
            <ul class="flex">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <div class="flex socials">
            <h3>Socials</h3>
            <ul class="flex">
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">Github</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">&copy;All right reserved.</div>
      </footer>
    </>
  );
};
