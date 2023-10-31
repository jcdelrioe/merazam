import "./Trayectoria.css";
import { imgData } from "../../App";
import { Imagen } from "../Imagen/imagen";

export const Trayectoria = ({ id }) => {
  console.log("idsdfsdf: ", id);

  const sourceImg = imgData.projects[id].images.map((ruta) => ruta.src);
  console.log(sourceImg);

  return (
    <section className="containerTrayectoria" id="TRAYECTORIA">
      <h3 className="subTittle">Trayectoria</h3>

      <Imagen sourceImg={sourceImg} />


    </section>
  );
};
