import "./Boostrap/Boostrap.css";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";
import Navbar from "./Component/Navbar/Navbar";
import { Element } from 'react-scroll';
import { ScrollToTop } from 'react-simple-scroll-up';

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <div className='main'>
        <p className="sp">BR</p><h3 className='spe'>Architects</h3>
      </div>
      <Element name="projects" />
      <Main />
      <Element name="about" />
      <About />
      <Element name="contact" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
