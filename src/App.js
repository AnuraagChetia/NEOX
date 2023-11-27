import "./App.css";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import Home from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import ServicePage from "./Pages/ServicePage";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Home />
      <AboutUsPage />
      <ServicePage />
      <ProjectPage />
      <ContactUsPage />
      <Footer />
    </>
  );
}

export default App;
