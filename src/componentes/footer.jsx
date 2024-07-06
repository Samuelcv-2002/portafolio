import Redes from "./Redes";

export function Footer() {
  return (
    <>
      <footer>
        <div className="ContContacBtn">
            <h5>Samuel Veliz</h5>
            <p>Profesional de la interacción, optimizando la experiencia del usuario en cada clic.</p>
            <a href="mailto:velizsamuel50@gmail.com">Contáctame</a>
        </div>

        <div className="contacto">
        <h5>Contacto</h5>
            <ul>
              <li>
                <span>E-mail de contacto:</span>
                <a href="mailto:velizsamuel50@gmail.com">
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
