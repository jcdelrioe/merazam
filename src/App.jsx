import "./App.css";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <div className="App"> */}
      <Header/>
      <Navbar/>

        {/* <div className="containerLogo">
          <a href="#" target="_blank">
            <img src={mzLogo} className="logo react" alt="Merazam logo" />
          </a>
          <h3 className="logoLema">
            La alianza perfecta para la consolidación de grandes proyectos de
            ingeniería con alta calidad
          </h3>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default App;
