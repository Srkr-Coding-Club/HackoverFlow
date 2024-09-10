import AboutSection from "./pages/AboutSection";
import Banner from "./pages/HeroSection";

import Navbar from "./pages/Navbar";
import Themes from "./pages/Themes";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import Sponcers from "./components/Sponsors";
import Prizes from "./components/Prizes";
import Popup from "./pages/Popup";
import Query from "./components/Query";

const App = () => {
  return (
    <>
      <Navbar />
      <Popup />
      <Banner />
      <AboutSection />
      <Themes />
      <Schedule />
      <Prizes />
      <Sponcers />
      <Query />
      <Footer />
    </>
  );
};

export default App;
