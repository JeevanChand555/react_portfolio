import React from "react";
import { Layout } from "./Layout";

export const Contact = () => {
  return (
    <Layout>
      <div class="section6 flex" id="contact">
        <h2 class="title">Get In Touch</h2>

        <div class="socials flex">
          <i class="fa-brands fa-linkedin-in"></i>

          <i class="fa-brands fa-github"></i>

          <i class="fa-brands fa-twitter"></i>

          <i class="fa-brands fa-youtube"></i>
        </div>

        <h3 class="title">OR</h3>

        <div class="email-section flex">
          <div class="email flex">
            <a href="mailto:user@email.com">example@gmail.com</a>
            <div class="send">
              <i class="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
