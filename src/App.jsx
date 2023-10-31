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
      project:
        "Reubicacion de lineas y Sistema de bombas del area de soda",
      type: "Mecanico",
      location: "Terminal Vopak",
      client: "VOPAK del Ecuador S. A.",
      owner: "VOPAK del Ecuador S. A.",
      year: 2007,
      images: [
        {
          src: "../src/assets/work/pag02/Vopak01.png",
          description:
            "Reubicacion de lineas",
        },
        {
          src: "../src/assets/work/pag02/Vopak02.png",
          description:
            "Reubicacion de lineas",
        },
        {
          src: "../src/assets/work/pag02/Pascuales03.png",
          description:
            "Reubicacion de bombas",
        },
      ],
    },
  ],
};

const imgData2 = {
  "Machu Picchu": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Machu_Picchu_-_Peru_-_2016.jpg/1200px-Machu_Picchu_-_Peru_-_2016.jpg",
    description: "Machu Picchu, Perú",
    area: "Cuzco",
    country: "Perú",
  },
  "Taj Mahal": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Taj_Mahal_2014.jpg/1200px-Taj_Mahal_2014.jpg",
    description: "Taj Mahal, India",
    area: "Agra",
    country: "India",
  },
  "Cristo Redentor": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Cristo_Redentor_-_Rio_de_Janeiro_-_Brasil_-_2014.jpg/1200px-Cristo_Redentor_-_Rio_de_Janeiro_-_Brasil_-_2014.jpg",
    description: "Cristo Redentor, Brasil",
    area: "Río de Janeiro",
    country: "Brasil",
  },
  "Gran Muralla China": {
    src: "https/upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Great_Wall_of_China_-_2015.jpg/1200px-Great_Wall_of_China_-_2015.jpg",
    description: "Gran Muralla China, China",
    area: "Beijing",
    country: "China",
  },
  "Torre Eiffel": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Eiffel_Tower_-_Paris_-_2015.jpg/1200px-Eiffel_Tower_-_Paris_-_2015.jpg",
    description: "Torre Eiffel, Francia",
    area: "París",
    country: "Francia",
  },
};

// console.log(imgData.map(() => );
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
