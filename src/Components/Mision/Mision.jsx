import "./Mision.css";
import merazamLogo from "../../assets/Logo_MZUp-DwTiny.png";

export const Mision = () => {
  return (
    <section className="containerLogo" id="MISION">
      {/* <a href="#" target="_blank">
        <img src={merazamLogo} className="logo" alt="Merazam logo" />
      </a> */}
      <h3>Visión</h3>
      <p className="logoLema">
        Ser una empresa lider en la construcción, ofreciendo soluciones integrales a nuestros clientes, con un equipo humano altamente calificado y comprometido con la calidad, seguridad y medio ambiente.
      </p>
      <h3>Misión</h3>
      <p className="logoLema">
        Aportar soluciones innovadoras en construcci[on, que contribuyan al desarrollo sostenible de nuestros clientes y del país.]
      </p>
    </section>
  );
};
