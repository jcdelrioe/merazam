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
      id: 0,
      project:
        "Construccion e instalacion de interconexion de lineas de diesel y gasolina",
      type: "Mecanico",
      location: "Terminal Pascuales",
      country: "Ecuador",
      client: "MOVINSER S. A.",
      owner: "PETROECUADOR",
      year: 2007,
      images: [
        {
          key: "img01",
          src: "../src/assets/work/pag02/Pascuales01.png",
          description:
            "Construccion e instalacion de lineas de diesel y gasolina",
        },
        {
          key: "img02",
          src: "../src/assets/work/pag02/Pascuales02.png",
          description:
            "Construccion e instalacion de lineas de diesel y gasolina",
        },
        {
          key: "img03",
          src: "../src/assets/work/pag02/Pascuales03.png",
          description:
            "Construccion e instalacion de lineas de diesel y gasolina",
        },
      ],
    },
    {
      id: 1,
      project: "Reubicacion de lineas y Sistema de bombas del area de soda",
      type: "Mecanico",
      location: "Terminal Vopak",
      country: "Ecuador",
      client: "VOPAK del Ecuador S. A.",
      owner: "VOPAK del Ecuador S. A.",
      year: 2007,
      images: [
        {
          key: "img04",
          src: "../src/assets/work/pag02/Vopak01.png",
          description: "Reubicacion de lineas",
        },
        {
          key: "img05",
          src: "../src/assets/work/pag02/Vopak02.png",
          description: "Reubicacion de lineas",
        },
        {
          key: "img06",
          src: "../src/assets/work/pag02/Pascuales03.png",
          description: "Reubicacion de bombas",
        },
      ],
    },
    {
      id: 2,
      project: "Construccion, Montaje y pintura de 7 tanques de almacenamiento (Varias capacidades)",
      type: "Mecanico",
      location: "Proyecto reserva de generacion fria ILO - MOQUEGUA",
      country: "Peru",
      client: "Santos CMI",
      owner: "Santos CMI",
      year: 2012,
      images: [
        {
          key: "img07",
          src: "../src/assets/work/pag03/Moquegua01.png",
          description: "Montaje de tanques",
        },
        {
          key: "img08",
          src: "../src/assets/work/pag03/Moquegua02.png",
          description: "Montaje de tanques",
        },
        {
          key: "img09",
          src: "../src/assets/work/pag03/Moquegua03.png",
          description: "Montaje de tanques",
        },
        {
          key: "img10",
          src: "../src/assets/work/pag03/Moquegua04.png",
          description: "Montaje de tanques",
        },
        {
          key: "img11",
          src: "../src/assets/work/pag03/Moquegua05.png",
          description: "Montaje de tanques",
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
      <Trayectoria id={"2"} />
      <Direccion />
    </>
  );
}

export default App;
