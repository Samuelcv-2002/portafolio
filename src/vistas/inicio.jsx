import { useEffect } from "react";
import Header from "../componentes/header";
import Proyectos from "../secciones/Proyectos";
import Resumen from "../secciones/Resumen";
import useObserver from "../observer";
import SobreMi from "../secciones/SobreMi";
import FloatRedes from "../componentes/floatRedes";
import Tech from "../componentes/tecnologies";
import Contacto from "../secciones/contacto";


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
        <Contacto/>
    </>
}