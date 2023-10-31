export const Imagen = ({ sourceImg }) => {
  const pic01 = sourceImg[0]
  console.log(pic01);
  return (
    <div className="slider">
      {sourceImg.map((image) => (
        <img className="sliderImg" src={image} alt="" />
        ))}
    </div>
  );
};
