import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import Button from "../Button"
import img1 from "../../assets/img/homepage/inspiration1.png"
import img2 from "../../assets/img/homepage/inspiration2.png"
import img3 from "../../assets/img/homepage/inspiration3.png"
import img4 from "../../assets/img/homepage/inspiration4.png"
import img5 from "../../assets/img/homepage/inspiration5.png"
import img6 from "../../assets/img/homepage/inspiration6.png"


const images = [img1, img2, img3, img4, img5, img6]

function InspirationSection() {
    return (
        <section className="inspiration">
            <div className="inspiration-container">

                <div className="inspiration__text">
                    <h2>50+ Beautiful rooms inspiration</h2>
                    <p>
                        Our designer already made a lot of beautiful prototipe of rooms that inspire you
                    </p>

                    <Button to="/shop" variant="primary" >
                        Explore More
                    </Button>


                </div>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    slidesPerView={"3"}
                    loop = {true}
                    pagination={{ clickable: true }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="room-card">
                                <img src={img} alt="room" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}

export default InspirationSection