import { useState } from "react"
import MyButton from "./MyButton"

import './styles/HabeasDataNotification.scss'

const HabeasDataNotification = () => {

    const [showNotification, setShowNotification] = useState(localStorage.getItem('habeasData') ? false : true)

    return (
        <div className="habeas-data">
            {showNotification && 
                <div className="wrapper">
                    <p>Nuestro sitio web emplea cookies con el fin de brindarle un mejor servicio y garantizar una grata experiencia. Al seguir navegando, está aceptando la política de cookies. <a href="https://www.decorceramica.com/terminos-y-condiciones" target="_blank" rel="noreferrer">Ver más</a></p>
                    <div className="action">
                        <MyButton onClick={() => { setShowNotification(false); localStorage.setItem('habeasData', 'checked') }}>Cerrar</MyButton>
                    </div>
                </div>
            }
        </div>
    )
}

export default HabeasDataNotification