import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import SEO from "../components/SEO"

import './styles/ConfigurationPage.scss'

const ConfigurationPage = ({ supplierData }) => {

    const navigate = useNavigate()

    useEffect(() => {
        if(!supplierData) {
            navigate('/login')
        }
    })

    return (
        <div className="configuration-page">
            <SEO title="Decorceramica - Portal de colaboradores | Mis datos" description="Valida tus datos y comprueba que la información de la que la empresa dispone sea correcta" />
            <Row>
                <Col>
                    <h2>Configuración</h2>
                </Col>
            </Row>
            <Row>
                <div className="configurationBoxGrid">
                    <Link className="configurationLink" to="/configuration-profiles">
                        <Card className="configurationBox">
                            <Card.Body>
                                <span className="configurationBoxIcon fa-solid fa-gear"/>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Roles y perfiles</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link className="configurationLink" to="/configurationSync">
                        <Card className="configurationBox">
                            <Card.Body>
                                <span className="configurationBoxIcon fa-solid fa-history"/>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Sincronización</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link className="configurationLink" to="/configuration-tracking">
                        <Card className="configurationBox">
                            <Card.Body>
                                <span className="configurationBoxIcon fa-solid fa-map"/>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Ubicación dispositivos</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </Row>
        </div>
    )
}

export default ConfigurationPage