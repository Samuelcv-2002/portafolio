// import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// proyectos 

import { proyectos } from "../assets/constantes/proyectos";
import { useContext } from "react";
import { ProyectoToView } from "../contextos/proyectCont";

export default function App() {
  const {setProyecto} = useContext(ProyectoToView)
  const window = screen.width
  return (
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={window < 500 ? 2 : "auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {proyectos.filter(element => element.active == 1).map((element) => (
          <SwiperSlide key={element.titulo} onClick={() => setProyecto(element)}>
            <img src={element.img} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
