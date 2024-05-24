export default function Card(props) {
    return <>
        <a href="https://samuelcv-2002.github.io/Valorant-Api/" target="noreferrer" className={props.className} style={props.style}>
        <img src={props.img} alt="Card Image"/>
            <div>
                <h3>Card Title</h3>
                <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            </div>
        </a>
    </>
}