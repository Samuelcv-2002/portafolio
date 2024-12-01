import { useEffect, useRef, useState } from "react";
export default function useObserver() {
    const [elements, setElements] = useState([]);

    const observer = useRef(new IntersectionObserver(entries => {
        const EleDom = entries[0].target.localName

        entries.forEach(entry => {
             if (EleDom == "section") {
                const id = entry.target.id
                const navElement = document.querySelector(`nav a[href="#${id}"]`)
                navElement.classList.toggle("active", entry.isIntersecting)
            } 
            entry.target.classList.toggle("Mostrar", entry.isIntersecting)
        })

    }, { threshold: 0.5 }));

    useEffect(() => {
        const currentObserver = observer.current;
        currentObserver.disconnect();
        if (elements.length > 0) {
            elements.forEach(element => currentObserver.observe(element))
        }

        return function cleanUp() {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        }

    }, [elements]);

    return [setElements]
}