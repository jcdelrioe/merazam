import "./Trayectoria.css";
import { imgData } from "../../App";
import { Imagen } from "../Imagen/imagen";
import pic01 from "../../assets/work/Pascuales03.png";
import pic02 from "../../assets/work/Moquegua04.png";
import pic03 from "../../assets/work/elec04.png";
import pic04 from "../../assets/work/elec05.png";

export const Trayectoria = ({ id }) => {
  console.log("idsdfsdf: ", id);

  const sourceImg = imgData.projects[id].images.map((ruta) => ruta.src);
  console.log(sourceImg);
  
  return (
    <section className="containerTrayectoria" id="TRAYECTORIA">
      <h3 className="subTittle">Trayectoria</h3>

      <Imagen sourceImg={sourceImg} />

      {/* <div className="slider">
        <img className="sliderImg" src={pic01} alt="" />
        <img className="sliderImg" src={pic02} alt="" />
        <img className="sliderImg" src={pic03} alt="" />
        <img className="sliderImg" src={pic04} alt="" />


      </div> */}
    </section>
  );
};
