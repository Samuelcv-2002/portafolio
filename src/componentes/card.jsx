export default function Card({proyect, style, className, setProyecto}) {
    return <>
        <article onClick={() => setProyecto(proyect)} className={className} style={style}>
        <img src={proyect.img} alt="Card Image"/>
            <div>
                <h3>{proyect.titulo}</h3>
            </div>
        </article>
    </>
}