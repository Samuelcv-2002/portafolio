import { useEffect } from "react";
import useObserver from "../observer";

export default function SobreMi() {

    const [setElements] = useObserver();

    useEffect(() => {
        const cards = document.querySelectorAll(".Hidden")
        setElements(cards);
    }, [setElements]);


    return <>
        <section id="AboutMe">
            <h2>Sobre mi</h2>
            <article className="Hidden">
                <img src="About.jpg" alt="Mi foto" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestiae corporis, natus quia perferendis odit laudantium accusamus, eos ipsam numquam illum fuga repellendus. Iste numquam culpa, sint aut eum consequatur.</p>
            </article>

        </section>
    </>
}