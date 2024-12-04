import { isMobile } from "react-device-detect";
import Redes from "./Redes";

export function Footer() {

  const EmailLink = isMobile 
  ? "mailto:"
  : "https://mail.google.com/mail/?view=cm&fs=1&to="; 
  
  return (
    <>
      <footer>
        <div className="ContContacBtn">
            <h5>Samuel Carico Veliz</h5>
            <p>Profesional de la interacción, optimizando la experiencia del usuario en cada clic.</p>
            <a href={EmailLink + 'velizsamuel50@gmail.com'} target="noreferrer">Contáctame</a>
        </div>

        <div className="contacto">
        <h5>Contacto</h5>
            <ul>
              <li>
                <span>E-mail de contacto:</span>
                <a href={EmailLink + 'velizsamuel50@gmail.com'} target="noreferrer">
                    velizsamuel50@gmail.com
                </a>
              </li>
              <li>
                <strong>Ubicación:</strong> Caracas, Venezuela
              </li>
            </ul>

            <div className="ft-Redes">
                <Redes/>
            </div>
        </div>
      </footer>
    </>
  );
}
