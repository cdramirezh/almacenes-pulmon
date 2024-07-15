import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import SEO from "../components/SEO"

import './styles/MaterialManagementPage.scss'

const ReportMaintenancePage = () => {

    const submitHandler = () => {}

    return (
        <div className="MaterialManagement-page">
            <SEO title="Decorceramica - Portal de colaboradores | Mis datos" description="Valida tus datos y comprueba que la información de la que la empresa dispone sea correcta" />
            <Row>
                <Col>
                    <h2>Maestro de materiales</h2>
                </Col>
            </Row>
            <Row>
                <Col className="col-3 offset-9">
                    <Form onSubmit={submitHandler}>
                        <Row>
                            <Col>
                                <Form.Control type="input" placeholder="Buscar Producto" />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <div className="configurationBoxGrid">
                    <Link className="configurationLink" to="/MasterMaterialDetails">
                        <Card className="configurationBox">
                            <Card.Img variant="top" src="/images/products/NP04BE009.jpg"/>
                            <Card.Body>
                                <Card.Title>Tornillos 9mm</Card.Title>
                                <Card.Text>
                                    Tornillos de buena calida usados para maquinas de alto calibre.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </Row>
        </div>
    )
}

export default ReportMaintenancePage