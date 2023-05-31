import "./App.css";
import "./style.css";

// importing images
import user from "./assests/images/user.png";
import ec from "./assests/images/ec.png";
import CV from "./assests/images/CV.docx";
function App() {
  return (
    <div className="">
      {/* <!-- Dark mode Button  --> */}
      <input type="checkbox" id="darkMode" class="dark-mode-checkbox" />

      <div class="wrapper">
        <label for="darkMode">
          <i class="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>

        {/* <!-- Header  --> */}

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
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </header>
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

        {/* <!-- Skills  section--> */}
        <section class="section3" id="skills">
          <div class="skills-container flex">
            <div class="flex">
              <i class="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>
            <div class="flex">
              <i class="fa-brands fa-css3-alt"></i>
              <span>CSS</span>
            </div>
            <div class="flex">
              <i class="fa-brands fa-square-js"></i>
              <span>JavaScript</span>
            </div>
            <div class="flex">
              <i class="fa-brands fa-react"></i>
              <span>React</span>
            </div>

            <div class="flex">
              <i class="fa-solid fa-folder-open"></i>
              <span>Firebase</span>
            </div>
          </div>
        </section>

        {/* <!-- Projects  --> */}

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
        {/* <!-- About  --> */}
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
                looking forward to new opportunities and new experiences in IT
                and tech world.
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

        {/* <!-- Get in touch  */}

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
        {/* <!-- Footer  --> */}

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
      </div>
    </div>
  );
}

export default App;
