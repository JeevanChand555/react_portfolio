import React from "react";

import user from "../assests/images/user.png";

export const About = () => {
  return (
    <>
      <section class="section5 flex" id="about">
        <h1 class="title">About Me</h1>
        <div class="about-container flex">
          <div class="left">
            <img src={user} alt="" />
          </div>
          <div class="right flex">
            <h2>Jeevan Chand</h2>
            <p>
              Tech-enthusiastic, passionate, self-motivated and IT graduate;
              technically well in HTML, CSS, WordPress, Python, JavaScript,
              React, Excel, RStudio and some handy networking administration
              skills. Eager to grow and committed to continuous learning and
              looking forward to new opportunities and new experiences in IT and
              tech world.
            </p>

            <p>Canberra, Australia</p>

            <div class="flex">
              <div class="tag">Interests</div>

              <div>
                <span>Coding</span>
                <span>Cricket</span>
                <span>Travel</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
