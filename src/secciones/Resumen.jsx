import App from "../componentes/Swiper";

export default function Resumen() {
    return <>
        <section id="Inicio">
            <h1>Samuel Carico</h1>
            <p>Full-Stack Developer | API Programmer</p>

            <div className="container-swiper">
                <App/>
            </div>
        </section>
    </>
}