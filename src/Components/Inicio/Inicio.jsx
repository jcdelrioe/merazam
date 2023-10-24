import "./Inicio.css";
import merazamLogo from "../../assets/Logo MZUp-DwTiny.png";

export const Inicio = () => {
  return (
    <section className="containerLogo" id="INICIO">
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
