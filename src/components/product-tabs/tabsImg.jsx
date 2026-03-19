function TabsImages({ images }) {

  return (
    <div className="product-tabs__images">

      {images.map((img, index) => (
        <div
          key={index}
          className="product-tabs__img"
        >
          <img src={img} alt="" />
        </div>
      ))}

    </div>
  );
}

export default TabsImages;