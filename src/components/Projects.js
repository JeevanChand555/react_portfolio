import React from "react";
import ec from "../assests/images/ec.png";
import { Layout } from "./Layout";
export const Projects = () => {
  return (
    <Layout>
      <section class="section4 flex" id="projects">
        <h2 class="title">My Recent Works</h2>
        <div class="projects-container grid">
          <div class="project-card flex">
            <div class="top">
              <img src={ec} alt="" />
            </div>
            <div class="bottom">
              <p>Full Stack Web App built with React & firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>

          <div class="project-card flex">
            <div class="top">
              <img src={ec} alt="" />
            </div>
            <div class="bottom">
              <p>Full Stack Web App built with React & firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>

          <div class="project-card flex">
            <div class="top">
              <img src={ec} alt="" />
            </div>
            <div class="bottom">
              <p>Full Stack Web App built with React & firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>

          <div class="project-card flex">
            <div class="top">
              <img src={ec} alt="" />
            </div>
            <div class="bottom">
              <p>Full Stack Web App built with React & firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
