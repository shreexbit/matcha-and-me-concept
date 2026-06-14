import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FlavorJourney from "./components/FlavorJourney";
import CoffeeJourney from "./components/CoffeeJourney";
import MenuSection from "./components/MenuSection";
import VisitSection from "./components/VisitSection";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FlavorJourney />
      <CoffeeJourney/>
      <MenuSection/>
      <VisitSection/>
    </main>
  );
}

export default App;