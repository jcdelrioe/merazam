import "./Mision.css";
import merazamLogo from "../../assets/Logo_MZUp-DwTiny.png";

export const Mision = () => {
  return (
    <section className="containerLogo" id="MISION">
      {/* <a href="#" target="_blank">
        <img src={merazamLogo} className="logo" alt="Merazam logo" />
      </a> */}
      <h3 className="subTittle">Visión</h3>
      <p className="logoLema">
        Ser una empresa líder en la construcción, ofreciendo soluciones integrales a nuestros clientes, con un equipo humano altamente calificado y comprometido con la calidad, seguridad y medio ambiente.
      </p>
      <h3 className="subTittle">Misión</h3>
      <p className="logoLema">
        Aportar soluciones innovadoras en construcción, que contribuyan al desarrollo sostenible de nuestros clientes y del país.
      </p>

    </section>
  );
};
