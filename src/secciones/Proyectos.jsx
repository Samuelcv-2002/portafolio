import { useEffect } from "react";
import useObserver from "../observer";
import Card from "../componentes/card";

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
                    <Card className="card Hidden" img="Proyectos/vuelos.png" style={{ "--Dur": 0.4 }} />
                    <Card className="card Hidden" img="Proyectos/dashRest.png" style={{ "--Dur": 0.6 }} />
                    <Card className="card Hidden" img="Proyectos/vuelos.png" style={{ "--Dur": 0.4 }} />
                    <Card className="card Hidden" img="Proyectos/lino.png" style={{ "--Dur": 0.7 }} />
                    <Card className="card Hidden" img="Proyectos/asistencia.png" style={{ "--Dur": 0.5 }} />
                    <Card className="card Hidden" img="Proyectos/val.png" style={{ "--Dur": 0.6 }} />
                </div>
            </div>
        </section>
    </>
}