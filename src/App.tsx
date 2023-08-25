import { PlanetDataProvider } from "./context/PlanetData";
import Homepage from "./pages";

function App() {
  return (
    <>
      <div>
        <PlanetDataProvider>
          <Homepage />
        </PlanetDataProvider>
      </div>
    </>
  );
}

export default App;
