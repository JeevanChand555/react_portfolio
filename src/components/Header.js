import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header class="flex primary-header">
        <div class="flex logo">
          <div>
            <h1>Jeevan</h1>
          </div>

          <div>
            <h1 class="line">Web Developer</h1>
          </div>
        </div>

        <div class="right">
          <input type="checkbox" id="check" />
          <label for="check" class="menu-icon">
            <i class="fa-solid fa-bars"></i>
          </label>

          <ul class="flex navigation">
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
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
