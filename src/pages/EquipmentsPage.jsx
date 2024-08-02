import { LinkContainer } from "react-router-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { useState } from "react"
import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Loader from '../components/Loader'
import Message from "../components/Message"

const EquipmentsPage = ({ equipments }) => {

    const [pageLoading, setPageLoading] = useState(false)
    // const [data, setData] = useState([])
    const [data, setData] = useState(equipments)

    const loadData = () => {
        setPageLoading(true)
        setTimeout(() => {
            setData(equipments)
            setPageLoading(false)
        }, 1000)
    }

    return (
        <div className="equipments-page">
            {pageLoading ? <Loader /> :
            <>
						<Breadcrumb>
							<LinkContainer to='/home'><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
							<Breadcrumb.Item active>Equipos</Breadcrumb.Item>
						</Breadcrumb>
                <Row>
                    <Col>
                        <h2>Administración de equipos</h2>
                    </Col>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2}>
                            <Form.Label className="mb-0 align-middle"><b>Código:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="number" />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2}>
                            <Form.Label className="mb-0 align-middle"><b>Nombre:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2}>
                            <Form.Label className="mb-0 align-middle"><b>Clase:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Select>
                                <option value="">Seleccione una opción</option>
                                {equipments.map((data, idx) => (
                                    <option key={idx} value={idx}>{data.type}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2}>
                            <Form.Label className="mb-0 align-middle"><b>Serial:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2}>
                            <Form.Label className="mb-0 align-middle"><b>Fabricante:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Select>
                                <option value="">Seleccione una opción</option>
                                {equipments.map((data, idx) => (
                                    <option key={idx} value={idx}>{data.brand}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="text-center mb-5 mt-2">
                        <Col>
                            <Button onClick={() => loadData()}>Buscar equipos</Button>
                        </Col>
                    </Row>
                </Row>
                {data.length ? (
                    <Row>
                        <Col>
                            <Table responsive>
                                <thead>
                                    <tr className="text-center">
                                        <th>Código</th>
                                        <th>Nombre</th>
                                        <th>Clase</th>
                                        <th>Modelo</th>
                                        <th>Serial</th>
                                        <th>Fabricante</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {data.map((equipment, idx) => (
                                    <tr key={idx}>
                                        <td><Link to={`/equipments/${equipment.id}`}>{equipment.id}</Link></td>
                                        <td>{`${equipment.brand} ${equipment.model}`}</td>
                                        <td>{equipment.type}</td>
                                        <td>{equipment.model}</td>
                                        <td>{equipment.serial}</td>
                                        <td>{equipment.brand}</td>
                                    </tr>    
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                ) : <Message>No hay datos para mostrar</Message>}
            </>}
        </div>
    )
}

export default EquipmentsPage