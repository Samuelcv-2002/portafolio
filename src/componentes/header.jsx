import { useEffect, useRef, useState } from "react"

export default function Header() {

    const Check = useRef()

    const [input, ischecked] = useState(false)

   useEffect(() => {
    
    Check.current.checked = input
   }, [input]);

    return <>
        <header>
            <a href="#Inicio">SamCV</a>
            <label htmlFor="checkMenu" id="checkMenulabel">☰</label>
            <input ref={Check} type="checkbox" id="checkMenu" onClick={() => ischecked(!input)}/>
            <nav>
                <a href="#Inicio" onClick={() => ischecked(!input)}>Inicio</a>
                <a href="#Proyectos" onClick={() => ischecked(!input)}>Proyectos</a>
                <a href="#Habilidades" onClick={() => ischecked(!input)}>Habilidades</a>
                <a href="#Experiencia" onClick={() => ischecked(!input)}>Experiencia</a>
            </nav>
        </header>

    </>
}