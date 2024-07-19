import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import SEO from "../components/SEO"
import ListGroup from 'react-bootstrap/ListGroup';
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

import './styles/MaterialManagementDetailPage.scss'

const ReportMaintenanceDetailPage = () => {

    return (
        <div className="MaterialManagementDetail-page">
            <SEO title="Decorceramica - Portal de colaboradores | Mis datos" description="Valida tus datos y comprueba que la información de la que la empresa dispone sea correcta" />
            <Row>
                <Col>
                    <h2><Link className="breadCrumbTitle" to="/master-materials">Maestro de materiales</Link> &gt; Tornillos de 9mm</h2>
                </Col>
            </Row>
            <Row className="sidewaysCard mt-4">
                <Col xs={12} md={6}>
                    <img src="/images/products/NP04BE009.jpg" alt="NP04BE009"/>
                </Col>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tornillos 9mm</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Descripción: Tornillos de buena calida usados para maquinas de alto calibre. </ListGroup.Item>
                            <ListGroup.Item>Tamaño: 9mm</ListGroup.Item>
                            <ListGroup.Item>Peso: 15g</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <h3>Stock</h3>
            </Row>
            <Row className="mt-4">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Centro</th>
                            <th>Almacen</th>
                            <th>Cantidad Disponible</th>
                            <th>Unidad</th>
                            <th>Añadir a la orden</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2000</td>
                            <td>3000</td>
                            <td>80</td>
                            <td>U</td>
                            <td><Button variant="primary"><span className="fa-solid fa-add"></span></Button></td>
                        </tr>
                        <tr>
                            <td>8000</td>
                            <td>9000</td>
                            <td>15</td>
                            <td>U</td>
                            <td><Button variant="primary"><span className="fa-solid fa-add"></span></Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </div>
    )
}

export default ReportMaintenanceDetailPage