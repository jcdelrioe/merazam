import "./Inicio.css";
import merazamLogo from "../../assets//Logo_MZUp-DwTiny.png";

export const Inicio = () => {
  return (
    <section className="containerInicio" id="INICIO">
      <a href="#" target="_blank">
        <img src={merazamLogo} className="logo" alt="Merazam logo" />
      </a>
      <h3 className="logoLema">
        La alianza perfecta para la consolidación de grandes proyectos de
        ingeniería con alta calidad
      </h3>
    </section>
  );
};
