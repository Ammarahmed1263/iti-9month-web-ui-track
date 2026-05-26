import "./App.css";
import { AboutSection, CardsGrid, ContactUs, Footer, HeroSection, Navbar } from "./components";
import { PLANT_CARDS } from "./constants";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardsGrid items={PLANT_CARDS} />
      <AboutSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
