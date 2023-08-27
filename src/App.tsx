import { PlanetDataProvider } from "./context/PlanetData";
import Homepage from "./pages";

function App() {
  return (
    <>
      <PlanetDataProvider>
        <Homepage />
      </PlanetDataProvider>
    </>
  );
}

export default App;
