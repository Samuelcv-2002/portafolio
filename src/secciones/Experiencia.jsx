import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { expe } from "../assets/constantes/experience";

export default function Experiencia() {
  return (
    <>
      <section id="Experiencia">
        <h2>Experiencia</h2>
        <VerticalTimeline>
            {expe.map(exp => <VerticalTimelineElement
            key={exp.title}
            className="vertical-timeline-element--work"
            date={exp.date}
            contentArrowStyle={{ borderRight: '7px solid #616879' }}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.ente}</h4>
            <p>{exp.desc}.</p>
            <article className="Stacks">
                {exp.image.map(img => <img src={img} key={img} alt="Stack" />)}
            </article>
          </VerticalTimelineElement>
            )}
        </VerticalTimeline>
      </section>
    </>
  );
}
