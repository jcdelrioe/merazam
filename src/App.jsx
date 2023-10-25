import "./App.css";
import picFondo from './assets/RM4.png'
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Inicio } from "./Components/Inicio/Inicio";
import { Mision } from "./Components/Mision/Mision";

function App() {
  return (
    <>

      <Header/>
      <Navbar/>
      <Inicio/>
      <Mision/>


    </>
  );
}

export default App;
