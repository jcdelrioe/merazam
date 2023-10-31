import "./Trayectoria.css";
import { Imagen } from "../Imagen/imagen";
import { Obras } from "../Obras/Obras";

export const Trayectoria = () => {


  return (
    <section className="containerTrayectoria" id="TRAYECTORIA">
      <h3 className="subTittle">Trayectoria</h3>

      <Obras />

      <Imagen />
    </section>
  );
};
