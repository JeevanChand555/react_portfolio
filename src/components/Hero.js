import React from "react";
import user from "../assests/images/user.png";
import CV from "../assests/images/CV.docx";
import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <Layout>
      {/* <!-- Hero  --> */}
      <section class="section1" id="header">
        <div class="hero grid">
          <div class="left flex">
            <img src={user} alt="profile pic" />
          </div>
          <div class="right flex">
            <div class="flex">
              <div class="name">Jeevan</div>
              <div class="tag">Web Developer</div>
            </div>
            <button>
              <a href={CV} download>
                Download CV <i class="fa-solid fa-download"></i>
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Banner  --> */}

      <section class="section2">
        <div class="info-container flex">
          <div class="info-lists flex">
            {/* <!-- Award  --> */}

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>

            <div class="info-divider"></div>

            {/* <!-- project completed  --> */}
            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>5+ Project</h5>
                <p>Completed</p>
              </span>
            </div>

            <div class="info-divider"></div>

            {/* <!-- Year Experience  --> */}
            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>1+ Year</h5>
                <p>Job Experience</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
