import { imgData } from "../../Data";

export const Obras = () => {
  return (
    <div>
      {imgData.projects.map((project) => (
        <p key={project.id}>{project.project.toUpperCase()}</p>
      ))}
    </div>
  );
};
