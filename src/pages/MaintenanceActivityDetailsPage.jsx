import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Loader from '../components/Loader'
import Message from "../components/Message"
import { Accordion, Button, Card, FloatingLabel, Table } from "react-bootstrap"
import './styles/MaintenanceActivityDetailsPage.scss'

const MaintenanceActivityDetailsPage = ({ equipments, maintenanceActivities }) => {
    const params = useParams()
    const [pageLoading, setPageLoading] = useState(true)
    const [data, setData] = useState([])
    const [equipment, setEquipment] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        const maintenanceActivityId = Number(params.id)
        const maintenanceActivity = maintenanceActivities.find(maintenanceActivity => maintenanceActivity.id === maintenanceActivityId)
        const equipmentIndex = Math.floor(Math.random() * (equipments.length))
        setEquipment(equipments[equipmentIndex])
        maintenanceActivity ? setData(maintenanceActivity) : setError('Actividad de mantenimiento no encontrada')
        
        setTimeout(() => setPageLoading(false), 1000)
    }, [maintenanceActivities, params, equipments])

    return (
        <div className="maintenance-activity-details-page">
            {pageLoading ? <Loader /> :
            error ?
                <Row>
                    <Col>
                        <Message variant='danger'>{error}</Message> 
                    </Col>
                </Row>
            :
            <>
                <Row>
                    <Col>
                        <h2>{data.name}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="activity__info">
                            <Row>
                                <Col>
                                    <Card className="activity__card">
                                        <div className="card__characteistic">
                                            <h5>ID</h5>
                                            <span>{data.id}</span>
                                        </div>
                                        <div className="card__characteistic">
                                            <h5>Equipo</h5>
                                            <Link to={`/equipments/${equipment.id}`}>{`${equipment.id} - ${equipment.brand} ${equipment.model}`}</Link>
                                        </div>
                                        <Row>
                                            <Col>
                                                <h5>Fecha de inicio</h5>
                                                <span>{data.startDate}</span>
                                            </Col>
                                            <Col>
                                                <h5>Fecha de fin</h5>
                                                <span>{data.endDate}</span>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className="activity__accordion">
                    <Col>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><b>Materiales utilizados</b></Accordion.Header>
                                <Accordion.Body>
                                    <Row className="materials__new">
                                        <Col>
                                            <FloatingLabel label="Código">
                                                <Form.Control type="text" placeholder="Código" />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel label="Cantidad">
                                                <Form.Control type="number" placeholder="Cantidad" min={1} />
                                            </FloatingLabel>
                                        </Col>
                                        <Col xs="auto">
                                            <Button size="lg">Agregar</Button>
                                        </Col>
                                    </Row>
                                    <Table responsive className="materials__table">
                                        <thead>
                                            <tr className="text-center">
                                                <th>ID Material</th>
                                                <th>Material</th>
                                                <th>Cantidad</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td>10097472</td>
                                                <td>Filtro de Aire</td>
                                                <td>7</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10080427</td>
                                                <td>Filtro de Combustible</td>
                                                <td>5</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10047009</td>
                                                <td>Cuchilla de Corte</td>
                                                <td>2</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10072783</td>
                                                <td>Rodamiento de Rodillos</td>
                                                <td>8</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10088059</td>
                                                <td>Correa de Transmisión</td>
                                                <td>2</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10073118</td>
                                                <td>Bujía de Encendido</td>
                                                <td>5</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><b>Materiales disponibles</b></Accordion.Header>
                                <Accordion.Body>
                                    <Table responsive className="available-materials__table">
                                        <thead>
                                            <tr className="text-center">
                                                <th>ID Material</th>
                                                <th>Material</th>
                                                <th>Cantidad</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td>10097472</td>
                                                <td>Filtro de Aire</td>
                                                <td>8</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10080427</td>
                                                <td>Filtro de Combustible</td>
                                                <td>3</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10047009</td>
                                                <td>Cuchilla de Corte</td>
                                                <td>3</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10072783</td>
                                                <td>Rodamiento de Rodillos</td>
                                                <td>2</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10088059</td>
                                                <td>Correa de Transmisión</td>
                                                <td>2</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10073118</td>
                                                <td>Bujía de Encendido</td>
                                                <td>3</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10096271</td>
                                                <td>Sensor de Temperatura</td>
                                                <td>3</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10093592</td>
                                                <td>Motor Hidráulico</td>
                                                <td>2</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10093399</td>
                                                <td>Válvula de Control</td>
                                                <td>5</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10052032</td>
                                                <td>Aceite Hidráulico</td>
                                                <td>10</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><b>Interlocutores</b></Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col className="text-end">
                                            <Button>Agregar nuevo</Button>
                                        </Col>
                                    </Row>
                                    <Table responsive className="available-materials__table">
                                        <thead>
                                            <tr className="text-center">
                                                <th>Interlocutor</th>
                                                <th>Nombre</th>
                                                <th>Función</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td>12005463</td>
                                                <td>Jairo Paredes</td>
                                                <td>Mecánico</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>12001562</td>
                                                <td>Luis Suárez</td>
                                                <td>Analista</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>12003544</td>
                                                <td>Esteban Ríos</td>
                                                <td>Controlador</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </>}
        </div>
    )
}

export default MaintenanceActivityDetailsPage