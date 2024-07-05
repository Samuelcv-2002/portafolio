import { useEffect, useState } from "react";
import Header from "../componentes/header";
import Proyectos from "../secciones/Proyectos";
import Resumen from "../secciones/Resumen";
import useObserver from "../observer";
import Redes from "../componentes/Redes";
import Tech from "../componentes/tecnologies";
import Habilidades from "../secciones/Habilidades.jsx";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons"; 
import { Footer } from "../componentes/footer.jsx";
import Experiencia from "../secciones/Experiencia.jsx";
import { ProyectoToView } from "../contextos/proyectCont.js";
import DetailsProyect from "../componentes/DetailsProyect.jsx";
library.add(fas)

export default function Incio() {
    const [setElements] = useObserver();
    const [Proyecto, setProyecto] = useState(null)

    const CheckSectionActive = () => {
        const cutUrl = location.href.split("#")
        if (cutUrl.length == 1) return
        const element = document.getElementById(cutUrl[1]);
        if (element) element.scrollIntoView({ behavior: 'smooth', inline: "start", start: "start"});
    }

    useEffect(() => {
        const sec = document.querySelectorAll("section")
        setElements(sec);

    }, [setElements]);

    useEffect(() => {
        CheckSectionActive()
    }, []);

    useEffect(() => {
        const body = document.body;
        body.style.overflow = Proyecto ? "hidden" : "auto"
    }, [Proyecto]);

    return <>

      <ProyectoToView.Provider value={{Proyecto, setProyecto}}>
            <aside className="FloatRedes">
                <Redes/>
            </aside>

            {Proyecto && <DetailsProyect/>}

            <Header />
            <Resumen />
            <article className="tecnologias">
                <Tech />
            </article>
            <Proyectos />
            <Habilidades/>
            <Experiencia/>
            <Footer/>
      </ProyectoToView.Provider>
    </>
}