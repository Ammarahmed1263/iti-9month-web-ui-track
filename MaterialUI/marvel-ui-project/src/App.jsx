import { Box } from "@mui/material";
import "./App.css";
import CardsGrid from "./components/CardsGrid";
import HeroSection from "./components/HeroSection";
import HeroStatsSection from "./components/HeroStatsSection";
import CallToActionSection from "./components/CallToActionSection";
import { HERO_CARDS, HERO_STATS } from "./constants";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      sx={{
        bgcolor: "var(--bg)",
        minHeight: "100vh",
        color: "var(--text)",
      }}
    >
      <Header />

      <HeroSection />

      <CardsGrid items={HERO_CARDS} />

      <HeroStatsSection items={HERO_STATS} />

      <CallToActionSection />

      <Footer />
    </Box>
  );
}

export default App;
