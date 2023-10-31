import { imgData } from "../../Data";

export const Obras = () => {
  return (
    <div className="containerObras">
      {imgData.projects.map((project) => (
        <p key={project.id}>{project.project.toUpperCase()}</p>
      ))}
    </div>
  );
};
