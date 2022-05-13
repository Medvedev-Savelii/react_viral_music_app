import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Recommend />

      {/* <ScrollToTop />
      <Testimonials />
      <Footer /> */}
    </>
  );
}

export default App;
