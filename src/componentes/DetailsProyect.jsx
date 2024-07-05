import { useContext, useState } from "react";
import { ProyectoToView } from "../contextos/proyectCont";

export default function DetailsProyect () {

    const {Proyecto, setProyecto} = useContext(ProyectoToView);
    const [image, setimage] = useState(Proyecto.images[0])

    return <>
    <div className="detailsProyect">
        <div className="backgroundProyect"></div>
            <label onClick={() => setProyecto(null)} className="Close">x</label>
            <div className="Contenido">
                <h2>{Proyecto.titulo}</h2>
            <article  className="content">
                <label>Descripción:</label>
                <p className="descript">{Proyecto.descripcion}.</p>
            </article>
            <aside className="asideAssets">
                <img src={image} alt={Proyecto.name} className="imgProyect"/>
                
                <div className="floatBtns">
                {Proyecto.images.map(element => 
                <button 
                key={Proyecto.name + element} 
                onClick={() => setimage(element)}
                disabled={image == element}
                >
                    <img src={element} alt="imagen" className="imgAssets"/>
                </button>)}
                </div>
                <div className="Stacks">
                    {Proyecto.stack.map(element => <img src={element} alt="tech" key={element}/>)}
                </div>
            </aside>

            <div className="Enlaces">
                        <a target="noreferrer" className={Proyecto.url ?? "diseable"} href={Proyecto.url ? Proyecto.url : "#"}>{Proyecto.url ? "Visualizar" : "Sin página"}</a>    
                        <a target="noreferrer" className={Proyecto.url ?? "diseable"} href="#">Ver video</a>
            </div>
            </div>
        </div>
    
    </>
}

