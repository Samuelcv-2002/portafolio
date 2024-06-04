import { useEffect } from "react";
import useObserver from "../observer";

const services = [
    {
        title: "Diseño web",
        description: "Enfocado en crear sitios web que sean atractivos y funcionalmente sólidos, adaptables a cualquier dispositivo",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
      </svg>
    },
    {
        title: "Manejo de API",
        description: "Desde su diseño y desarrollo hasta su implementación, monitoreo y optimización",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"/>
            </svg>
    },
    {
        title: "Desarrollo de Aplicaciones",
        description: "Aprovecho mi profundo conocimiento en el desarrollo de aplicaciones.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/></svg>
    }
]

export default function Servicios() {
    const [setElements] = useObserver();

    useEffect(() => {
        const cards = document.querySelectorAll(".Hidden")
        setElements(cards);
    }, [setElements]);
  return (
    <>
      <section id="Servicios">
        <h2>Servicios</h2>
        <div className="container">
            <h3>Adaptandome al mercado actual</h3>
          <div className="servicesCont">
            {services.map((service, i) => 
            <article className="card-services Hidden" key={service.title} style={{ "--Dur": `0.${i + 4}`,  "--transform": "translateY(0px)" }}>
                {service.icon}
                  <p className="card-title">{service.title}</p>
                  <p className="card-description">
                  {service.description}.
                  </p>
              </article>
            )}
            
          </div>
        </div>
      </section>
    </>
  );
}
