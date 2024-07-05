import { useEffect} from "react";
import useObserver from "../observer";
import Card from "../componentes/card";
import {proyectos} from "../assets/constantes/proyectos"
import { ProyectoToView } from "../contextos/proyectCont";
import { useContext } from "react";

export default function Proyectos() {
    const {setProyecto} = useContext(ProyectoToView);
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
                {proyectos.map((element, i) => <Card key={element.titulo + element.active} className="card Hidden" proyect={element} style={{ "--Dur": `0.${i + 3}`,  "--transform": "translateY(0px)" }} setProyecto={setProyecto}/>)}
                </div>
            </div>
        </section>
    </>
}