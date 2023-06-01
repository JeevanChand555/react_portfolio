import "./App.css";
import "./style.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
// import { Contact } from "./components/Contact";
import { Route } from "react-router";
import { Routes } from "react-router";
// import { Contact } from "./components/COntact";

// importing images
import user from "./assests/images/user.png";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="">
      {/* <!-- Dark mode Button  --> */}
      <input type="checkbox" id="darkMode" class="dark-mode-checkbox" />

      <div class="wrapper">
        {/* Header Section  */}
        {/* <Header />  */}

        <Routes>
          <Route path="/" element={<Hero />} />

          {/* Hero Section  */}

          {/* <!-- Skills  section--> */}

          <Route path="skills" element={<Skills />} />

          {/* <!-- Projects  --> */}

          <Route path="projects" element={<Projects />} />

          {/* <!-- About  --> */}

          <Route path="about" element={<About />} />

          {/* <!-- Get in touch  */}
          {/* <Routes path = "/" element={<Hero />}> */}

          {/* <Contact /> */}
          <Route path="contact" element={<Contact />} />

          {/* <!-- Footer  --> */}
        </Routes>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;

// 1. npm i react-router-dom
// 2. wrap entire components with BrowserRouter in index.js or app.js
// 3. use Routes componenets to wrap all the pages
//4. define individual page by using Route componenet
