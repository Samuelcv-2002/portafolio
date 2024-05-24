// import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const proyectos = [
  {
    titulo: "Sistema de inventario",
    descripcion:
      "Sistema de inventario para la empresa de construcción de viviendas, el cual permite el control de los materiales",
    img: "../../public/Proyectos/asistencia.png",
  },
  {
    titulo: "Sistema de restaurante",
    descripcion:
      "Sistema de inventario para la empresa de construcción de viviendas, el cual permite el control de los materiales",
    img: "../../public/Proyectos/dashRest.png",
  },
  {
    titulo: "Lino Gallardo web",
    descripcion:
      "Sistema de inventario para la empresa de construcción de viviendas, el cual permite el control de los materiales",
    img: "../../public/Proyectos/lino.png",
  },

  {
    titulo: "Valorant web",
    descripcion:
      "Sistema de inventario para la empresa de construcción de viviendas, el cual permite el control de los materiales",
    img: "../../public/Proyectos/val.png",
  },

  {
    titulo: "Vuelos web",
    descripcion:
      "Sistema de inventario para la empresa de construcción de viviendas, el cual permite el control de los materiales",
    img: "../../public/Proyectos/vuelos.png",
  },
];

export default function App() {
  return (
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
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
        {proyectos.map((element) => (
          <SwiperSlide key={element.titulo}>
            <img src={element.img} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
