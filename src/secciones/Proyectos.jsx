import { useEffect } from "react";
import useObserver from "../observer";
import Card from "../componentes/card";
import {proyectos} from "../assets/constantes"

export default function Proyectos() {

    const [setElements] = useObserver();

    useEffect(() => {
        const cards = document.querySelectorAll(".Hidden")
        setElements(cards);
    }, [setElements]);

    return <>
        <section id="Proyectos">
            <h2>Proyectos</h2>
            <div className="container">
                <div className="Proyectos">
                {proyectos.map((element, i) => <Card key={element.titulo} className="card Hidden" img={element.img} style={{ "--Dur": `0.${i + 3}`,  "--transform": "translateY(0px)" }} />)}
                </div>
            </div>
        </section>
    </>
}

/*
               {proyectos.map((element, i) => {
                        const Dur = 0.4 + i
                        return <><Card className="card Hidden" img={element.img} style={{ "--Dur": Dur }} /></>
                    })}
*/