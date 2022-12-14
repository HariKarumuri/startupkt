import "./App.css";
import NavBar from "./components/nav/NavBar";
import Services from "./components/servicess/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./components/blog/Blog";
import Blogpost from "./components/blog/Blogpost";
import About from "./components/about/About";
import Home from "./Home";
import UiPage from "./components/servicess/Single Services/UiPage";
import WebDevPage from "./components/servicess/Single Services/WebDevPage";
import DigiMarkPage from "./components/servicess/Single Services/DigiMarkPage";
import MandSPage from "./components/servicess/Single Services/MandSPage";
import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
      <Helmet>
        <title>StartupKT Business Solution - it services company</title>
        <meta name="description" content="We are StartupKt, a digital agency that specializes in a wide range of services, including digital marketing, web development, app development, graphic design, and UI/UX." />
        <meta name="keywords" content="best it service company in bangalore" />
      </Helmet>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route exact path="/Services" element={<Services />}></Route>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/:slug" element={<Blogpost />}></Route>
          <Route exact path="/Services/UiUxDesigns" element={<UiPage />} />
          <Route exact path="/Services/AppDev" element={<WebDevPage />} />
          <Route
            exact
            path="/Services/MentoringScaling"
            element={<MandSPage />}
          />
          <Route
            exact
            path="/Services/DigitalMarketing"
            element={<DigiMarkPage />}
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
