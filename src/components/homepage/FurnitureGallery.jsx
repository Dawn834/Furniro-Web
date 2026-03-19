import img1 from "../../assets/img/homepage/furnitureGallery1.png"
import img2 from "../../assets/img/homepage/furnitureGallery2.png"
import img3 from "../../assets/img/homepage/furnitureGallery3.png"
import img4 from "../../assets/img/homepage/furnitureGallery4.png"
import img5 from "../../assets/img/homepage/furnitureGallery5.png"
import img6 from "../../assets/img/homepage/furnitureGallery6.png"
import img7 from "../../assets/img/homepage/furnitureGallery7.png"
import img8 from "../../assets/img/homepage/furnitureGallery8.png"
import img10 from "../../assets/img/homepage/furnitureGallery10.png"





function FurnitureGallery() {

    return (
        <section className="furniture-gallery">
            <p>Share your setup with</p>
            <h2>#FuniroFurniture</h2>
            <div className="gallery">
                <div className="gallery__item gallery__item--1"><img src={img1} /></div>
                <div className="gallery__item gallery__item--2"><img src={img3} /></div>
                <div className="gallery__item gallery__item--3"><img src={img3} /></div>
                <div className="gallery__item gallery__item--4"><img src={img4} /></div>
                <div className="gallery__item gallery__item--5"><img src={img2} /></div>
                <div className="gallery__item gallery__item--6"><img src={img4} /></div>
                <div className="gallery__item gallery__item--7"><img src={img7} /></div>
                <div className="gallery__item gallery__item--8"><img src={img8} /></div>
                <div className="gallery__item gallery__item--9"><img src={img10} /></div>
            </div>

        </section>
    );

}

export default FurnitureGallery;