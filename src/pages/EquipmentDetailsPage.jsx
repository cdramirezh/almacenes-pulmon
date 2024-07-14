import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Loader from '../components/Loader'
import Message from "../components/Message"
import { Accordion, Button, Card, FloatingLabel, Table } from "react-bootstrap"
import './styles/EquipmentDetailsPage.scss'

const EquipmentDetailsPage = ({ equipments, maintenanceActivities }) => {
    const params = useParams()
    const [pageLoading, setPageLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const equipmentId = Number(params.id)
        const equipment = equipments.find(equipment => equipment.id === equipmentId)
        equipment ? setData(equipment) : setError('Equipo no encontrado')
        
        setTimeout(() => setPageLoading(false), 1000)
    }, [equipments, params])

    return (
        <div className="equipment-details-page">
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
                        <h2>{`${data.brand} ${data.model}`}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="basic-details">
                            <Row>
                                <Col xs={12} sm={12} md={6} className="left">
                                    <img className="basic-details__img" src={data.image} alt="Equipment" />
                                </Col>
                                <Col xs={12} sm={12} md={6} className="right">
                                    <Card className="basic-details__basic-info">
                                        <div className="basic-details__characteistic">
                                            <h5>ID</h5>
                                            <span>{data.id}</span>
                                        </div>
                                        <div className="equipment-characteistic">
                                            <h5>Fabricante</h5>
                                            <span>{data.brand}</span>
                                        </div>
                                        <div className="equipment-characteistic">
                                            <h5>Modelo</h5>
                                            <span>{data.model}</span>
                                        </div>
                                        <div className="equipment-characteistic">
                                            <h5>Clase de equipo</h5>
                                            <span>{data.type}</span>
                                        </div>
                                        <div className="equipment-characteistic">
                                            <h5>Serial</h5>
                                            <span>{data.serial}</span>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className="equipment__accordion">
                    <Col>
                        <Accordion>
                            {data.technicalsDetails.map((technical, idx) =>  (
                                <Accordion.Item key={idx} eventKey={idx}>
                                    <Accordion.Header><b>{technical.segment}</b></Accordion.Header>
                                    <Accordion.Body>
                                        <Table responsive>
                                            <thead>
                                                <tr className="text-center">
                                                    <th>Caraacterística</th>
                                                    <th>Valor</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-center">
                                                {technical.characteristics.map((characteristic, idx) => (
                                                <tr key={idx}>
                                                    <td>{characteristic.name}</td>
                                                    <td>{characteristic.value}</td>
                                                </tr>    
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                            <Accordion.Item eventKey="7">
                                <Accordion.Header><b>Adminsitración consumo de materiales </b></Accordion.Header>
                                <Accordion.Body>
                                    <Row className="materials__new">
                                        <Col>
                                            <FloatingLabel label="Código">
                                                <Form.Control type="text" placeholder="Código" />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel label="Mínimo">
                                                <Form.Control type="number" placeholder="Mínimo" min={1} />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel label="Máximo">
                                                <Form.Control type="number" placeholder="Máximo" min={1} />
                                            </FloatingLabel>
                                        </Col>
                                        <Col xs="auto">
                                            <Button>Agregar</Button>
                                        </Col>
                                    </Row>
                                    <Table responsive className="mt-4">
                                        <thead>
                                            <tr className="text-center">
                                                <th>ID Material</th>
                                                <th>Material</th>
                                                <th>Mínima</th>
                                                <th>Máximo</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td>10097472</td>
                                                <td>Filtro de Aire</td>
                                                <td>5</td>
                                                <td>15</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10080427</td>
                                                <td>Filtro de Combustible</td>
                                                <td>3</td>
                                                <td>8</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10047009</td>
                                                <td>Cuchilla de Corte</td>
                                                <td>2</td>
                                                <td>5</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10072783</td>
                                                <td>Rodamiento de Rodillos</td>
                                                <td>6</td>
                                                <td>10</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10088059</td>
                                                <td>Correa de Transmisión</td>
                                                <td>2</td>
                                                <td>4</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10073118</td>
                                                <td>Bujía de Encendido</td>
                                                <td>2</td>
                                                <td>8</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10096271</td>
                                                <td>Sensor de Temperatura</td>
                                                <td>1</td>
                                                <td>3</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10093592</td>
                                                <td>Motor Hidráulico</td>
                                                <td>0</td>
                                                <td>2</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10093399</td>
                                                <td>Válvula de Control</td>
                                                <td>3</td>
                                                <td>5</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10052032</td>
                                                <td>Aceite Hidráulico</td>
                                                <td>3</td>
                                                <td>10</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header><b>Inventario de materiales</b></Accordion.Header>
                                <Accordion.Body>
                                    <Table responsive>
                                        <thead>
                                            <tr className="text-center">
                                                <th>ID Material</th>
                                                <th>Material</th>
                                                <th>cantidad</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td>10097472</td>
                                                <td>Filtro de Aire</td>
                                                <td>7</td>
                                            </tr>
                                            <tr>
                                                <td>10080427</td>
                                                <td>Filtro de Combustible</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>10047009</td>
                                                <td>Cuchilla de Corte</td>
                                                <td>2</td>
                                            </tr>
                                            <tr>
                                                <td>10072783</td>
                                                <td>Rodamiento de Rodillos</td>
                                                <td>8</td>
                                            </tr>
                                            <tr>
                                                <td>10088059</td>
                                                <td>Correa de Transmisión</td>
                                                <td>2</td>
                                            </tr>
                                            <tr>
                                                <td>10073118</td>
                                                <td>Bujía de Encendido</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>10096271</td>
                                                <td>Sensor de Temperatura</td>
                                                <td>2</td>
                                            </tr>
                                            <tr>
                                                <td>10093592</td>
                                                <td>Motor Hidráulico</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>10093399</td>
                                                <td>Válvula de Control</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <td>10052032</td>
                                                <td>Aceite Hidráulico</td>
                                                <td>5</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header><b>Actividades de mantenimiento</b></Accordion.Header>
                                <Accordion.Body>
                                    <Table responsive>
                                        <thead>
                                            <tr className="text-center">
                                                <th>Id</th>
                                                <th>Actividad</th>
                                                <th>Estado</th>
                                                <th>Fecha de inicio</th>
                                                <th>Fecha de fin</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {maintenanceActivities.sort((a, b) => {
                                                if(a.startDate > b.startDate) {
                                                    return -1
                                                }  else if (a.startDate < b.startDate) {
                                                    return 1
                                                } else {
                                                    return 0
                                                }
                                            }).map((activity, idx) => (
                                            <tr key={idx}>
                                                <td>
                                                    <Link to={`/maintenance-activities/${activity.id}`}>{activity.id}</Link>
                                                </td>
                                                <td>{activity.name}</td>
                                                <td>{activity.status}</td>
                                                <td>{activity.startDate}</td>
                                                <td>{activity.endDate}</td>
                                            </tr>    
                                            ))}
                                        </tbody>
                                    </Table> 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10">
                                <Accordion.Header><b>Enlaces</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                    {data.links.map((link, idx) => (
                                        <li key={idx} className="accordion__link">
                                            <a href={link.link} target="_blank" rel="noreferrer">{link.name}</a>
                                        </li>
                                    ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </>}
        </div>
    )
}

export default EquipmentDetailsPage