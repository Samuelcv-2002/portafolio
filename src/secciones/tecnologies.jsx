import postgres from "/logos/postgresql.png"
import JavaScript from "/logos/javascript.png"
import typescript from "/logos/typescript.png"
import Docker from "/logos/Docker.png"
import node from "/logos/Node.png"
import react from "/logos/React.png"
import mysql from "/logos/mysql.png"
import vue from "/logos/vuejs.webp"


import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 5,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 3,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 5,
        partialVisibilityGutter: 30
    }
}

export default function Tech() {
    return <Carousel
        responsive={responsive}
        rewindWithAnimation={false}
        slidesToSlide={1}
        arrows={false}
        autoPlay
        autoPlaySpeed={1000}
        className="carousel"
        infinite={true}
    >
        <img src={JavaScript} alt="" />
        <img src={Docker} alt="" />
        <img src={postgres} alt="" />
        <img src={react} alt="" />
        <img src={mysql} alt="" />
        <img src={node} alt="" />
        <img src={typescript} alt="" />
        <img src={vue} alt="" />
    </Carousel>
}