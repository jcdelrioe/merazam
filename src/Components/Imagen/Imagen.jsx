export const Imagen = ({ sourceImg }) => {
  return (
    <div className="slider">
      {sourceImg.map((image) => (
        <img className="sliderImg" src={image} alt="" />
        ))}
    </div>
  );
};
