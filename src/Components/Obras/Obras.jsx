import { imgData } from "../../Data";

export const Obras = () => {
  return (
    <div>
      {imgData.projects.map((project) => (
        <p>{project.project.toUpperCase()}</p>
      ))}
    </div>
  );
};
