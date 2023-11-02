import { imgData } from "../../Data";
import { Imagen } from "../Imagen/Imagen";

export const Obras = () => {
  return (
    <div className="containerObras">
      {imgData.projects.map((project) => (
        <>
          <p key={project.id}>{project.project.toUpperCase()}</p>
          <p>{project.year}</p>
          <Imagen images={project.images}/>
        </>
      ))}
    </div>


  );
};
