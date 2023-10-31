import "./App.css";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Inicio } from "./Components/Inicio/Inicio";
import { Mision } from "./Components/Mision/Mision";
import { Trayectoria } from "./Components/Trayectoria/Trayectoria";
import { Direccion } from "./Components/Direccion/Direccion";



function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Inicio />
      <Mision />
      <Trayectoria />
      <Direccion />
    </>
  );
}

export default App;
