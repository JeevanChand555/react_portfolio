import "./App.css";
import "./style.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
// import { Contact } from "./components/COntact";

// importing images
import user from "./assests/images/user.png";

function App() {
  return (
    <div className="">
      {/* <!-- Dark mode Button  --> */}
      <input type="checkbox" id="darkMode" class="dark-mode-checkbox" />

      <div class="wrapper">
        {/* Header Section  */}
        <Header />

        {/* Hero Section  */}

        <Hero />

        {/* <!-- Skills  section--> */}

        <Skills />
        {/* <!-- Projects  --> */}

        <Projects />

        {/* <!-- About  --> */}

        <About />

        {/* <!-- Get in touch  */}

        {/* <Contact /> */}

        {/* <!-- Footer  --> */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
