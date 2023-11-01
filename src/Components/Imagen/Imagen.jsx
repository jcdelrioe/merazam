
export const Imagen = ({images}) => {

  return (
    <div className="slider">
      {images.map((image) => (
        <img key={images.key} className="sliderImg" src={image.src} alt="" />
      ))}
    </div>
  );
};
