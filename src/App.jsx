import "./App.css";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Inicio } from "./Components/Inicio/Inicio";
import { Mision } from "./Components/Mision/Mision";
import { Trayectoria } from "./Components/Trayectoria/Trayectoria";
import { Direccion } from "./Components/Direccion/Direccion";

export const imgData = {
  projects: [
    {
      id: 1,
      project:
        "Construccion e instalacion de interconexion de lineas de diesel y gasolina",
      type: "Mecanico",
      location: "Terminal Pascuales",
      client: "MOVINSER S. A.",
      owner: "PETROECUADOR",
      year: 2007,
      images: [
        {
          src: "../src/assets/work/pag02/Pascuales01.png",
          description:
            "Construccion e instalacion de lineas de diesel y gasolina",
        },
        {
          src: "../src/assets/work/pag02/Pascuales02.png",
          description:
            "Construccion e instalacion de lineas de diesel y gasolina",
        },
        {
          src: "../src/assets/work/pag02/Pascuales03.png",
          description:
            "Construccion e instalacion de lineas de diesel y gasolina",
        },
      ],
    },
    {
      id: 2,
      project: "Reubicacion de lineas y Sistema de bombas del area de soda",
      type: "Mecanico",
      location: "Terminal Vopak",
      client: "VOPAK del Ecuador S. A.",
      owner: "VOPAK del Ecuador S. A.",
      year: 2007,
      images: [
        {
          src: "../src/assets/work/pag02/Vopak01.png",
          description: "Reubicacion de lineas",
        },
        {
          src: "../src/assets/work/pag02/Vopak02.png",
          description: "Reubicacion de lineas",
        },
        {
          src: "../src/assets/work/pag02/Pascuales03.png",
          description: "Reubicacion de bombas",
        },
      ],
    },
  ],
};

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Inicio />
      <Mision />
      <Trayectoria id={"0"} />
      <Direccion />
    </>
  );
}

export default App;
