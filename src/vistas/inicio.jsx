import { useEffect } from "react";
import Header from "../componentes/header";
import Proyectos from "../secciones/Proyectos";
import Resumen from "../secciones/Resumen";
import useObserver from "../observer";
import FloatRedes from "../componentes/floatRedes";
import Tech from "../componentes/tecnologies";
import Servicios from "../secciones/Servicios.jsx";


export default function Incio() {
    const [setElements] = useObserver();

    useEffect(() => {
        const sec = document.querySelectorAll("section")
        setElements(sec);
    }, [setElements]);
    return <>

        <FloatRedes/>
        <Header />
        <Resumen />
        <article className="tecnologias">
            <Tech />
        </article>
        <Proyectos />
        <Servicios/>
    </>
}