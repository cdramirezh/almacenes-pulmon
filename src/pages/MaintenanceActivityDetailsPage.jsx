import { LinkContainer } from "react-router-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Loader from '../components/Loader'
import Message from "../components/Message"
import CustomModal from "../components/CustomModal"
import { Accordion, Button, Card, Table } from "react-bootstrap"
import './styles/MaintenanceActivityDetailsPage.scss'
import Swal from "sweetalert2"

const MaintenanceActivityDetailsPage = ({ equipments, maintenanceActivities, fields }) => {
    const navigate = useNavigate()
    const params = useParams()
    const [pageLoading, setPageLoading] = useState(true)
    const [data, setData] = useState([])
    const [equipment, setEquipment] = useState(null)
    const [error, setError] = useState('')
    const [modalCloseActivity, setModalCloseActivity] = useState(false)
    const [modalEvidence, setModalEvidence] = useState(false)

    useEffect(() => {
        const maintenanceActivityId = Number(params.id)
        const maintenanceActivity = maintenanceActivities.find(maintenanceActivity => maintenanceActivity.id === maintenanceActivityId)
        const equipmentIndex = Math.floor(Math.random() * (equipments.length))
        setEquipment(equipments[equipmentIndex])
        maintenanceActivity ? setData(maintenanceActivity) : setError('Actividad de mantenimiento no encontrada')
        
        setTimeout(() => setPageLoading(false), 1000)
    }, [maintenanceActivities, params, equipments])

    const loadEvidenceHandler = () => {
        setModalEvidence(true)
    }

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
						<Breadcrumb>
							<LinkContainer to='/home'><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
							<LinkContainer to='/maintenance-activities'><Breadcrumb.Item>Actividades de mantenimiento</Breadcrumb.Item></LinkContainer>
							<Breadcrumb.Item active>{data.name}</Breadcrumb.Item>
						</Breadcrumb>
                <Row>
                    <Col>
                        <h2>{data.name}</h2>
                    </Col>
                    {data.status === "En proceso" &&
                    <Col className="text-end">
                        <Button variant="secondary" onClick={() => setModalCloseActivity(true)}>Completar</Button>
                    </Col>
                    }
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
                                            <h5>Estado</h5>
                                            <span>{data.status}</span>
                                        </div>
                                        <div className="card__characteistic">
                                            <h5>Equipo</h5>
                                            <Link to={`/equipments/${equipment.id}`}>{`${equipment.id} - ${equipment.brand} ${equipment.model}`}</Link>
                                        </div>
                                        <div className="card__characteistic">
                                            <h5>Suerte</h5>
                                            <Link to={`/fields/${data.field}`}>{fields.find(field => field.id === data.field).name}</Link>
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
                                            <Form.Control type="text" placeholder="Código" />
                                        </Col>
                                        <Col>
                                            <Form.Control type="number" placeholder="Cantidad" min={1} />
                                        </Col>
                                        <Col xs="auto">
                                            <Button>Agregar</Button>
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
                                                <td>
                                                    <Link to={`/master-materials/${10097472}`}>10097472</Link>
                                                </td>
                                                <td>Filtro de Aire</td>
                                                <td>7</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10080427}`}>10080427</Link>
                                                </td>
                                                <td>Filtro de Combustible</td>
                                                <td>5</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10047009}`}>10047009</Link>
                                                </td>
                                                <td>Cuchilla de Corte</td>
                                                <td>2</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10072783}`}>10072783</Link>
                                                </td>
                                                <td>Rodamiento de Rodillos</td>
                                                <td>8</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10088059}`}>10088059</Link>
                                                </td>
                                                <td>Correa de Transmisión</td>
                                                <td>2</td>
                                                <td className="actions">
                                                    <i className="icon fa-solid fa-pen-to-square"></i>
                                                    <i className="icon fa-solid fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10073118}`}>10073118</Link>
                                                </td>
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
                                                <td>
                                                    <Link to={`/master-materials/${10097472}`}>10097472</Link>
                                                </td>
                                                <td>Filtro de Aire</td>
                                                <td>8</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10080427}`}>10080427</Link>
                                                </td>
                                                <td>Filtro de Combustible</td>
                                                <td>3</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10047009}`}>10047009</Link>
                                                </td>
                                                <td>Cuchilla de Corte</td>
                                                <td>3</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10072783}`}>10072783</Link>
                                                </td>
                                                <td>Rodamiento de Rodillos</td>
                                                <td>2</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10088059}`}>10088059</Link>
                                                </td>
                                                <td>Correa de Transmisión</td>
                                                <td>2</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10073118}`}>10073118</Link>
                                                </td>
                                                <td>Bujía de Encendido</td>
                                                <td>3</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10096271}`}>10096271</Link>
                                                </td>
                                                <td>Sensor de Temperatura</td>
                                                <td>3</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10093592}`}>10093592</Link>
                                                </td>
                                                <td>Motor Hidráulico</td>
                                                <td>2</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10093399}`}>10093399</Link>
                                                </td>
                                                <td>Válvula de Control</td>
                                                <td>5</td>
                                                <td className="actions__use">
                                                    <Form.Control type="number" defaultValue={1} min={1} max={8} />
                                                    <Button>Usar</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to={`/master-materials/${10052032}`}>10052032</Link>
                                                </td>
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
                            {data.evidences && data.evidences.length &&
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><b>Evidencias</b></Accordion.Header>
                                <Accordion.Body className="accordion__evidences">
                                    <Row>
                                        <Col>
                                            {data.evidences.map((evidence, idx) => (
                                                <a key={idx} href={evidence} target="_blank" rel="noreferrer"><img src={evidence} alt={idx} /></a>
                                            ))}
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>}
                            {data.signs && data.signs.length &&
                            <Accordion.Item eventKey="5">
                                <Accordion.Header><b>Firmas</b></Accordion.Header>
                                <Accordion.Body className="accordion__signs">
                                    <Row>
                                        <Col>
                                            {data.signs.map((sign, idx) => (
                                                <a key={idx} href={sign.src} target="_blank" rel="noreferrer">
                                                    <h6>{sign.name}</h6>
                                                    <img src={sign.src} alt={sign.name} />
                                                </a>
                                            ))}
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>}
                        </Accordion>
                    </Col>
                </Row>
            </>}
            <CustomModal show={modalCloseActivity} onHide={() => setModalCloseActivity(false)} onAction={() => Swal.fire('Actividad completada', 'Se ha completado la actividad con éxito', 'success').then(() => navigate("/home"))} actionText="Completar" title="Materiales sobrantes">
                <p className="my-0">La siguiente lista de materiales no ha sido usada en el mantenimiento.</p>
                <p>Seleccione los materiales que desea retornar al almacén y cargue las evidencias:</p>
                <Row>
                    <Col>
                        <Table responsive>
                            <thead>
                                <tr className="text-center">
                                    <th>Id</th>
                                    <th>Material</th>
                                    <th>Cantidad</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>
                                        <Link to={`/master-materials/${10047009}`}>10047009</Link>
                                    </td>
                                    <td>Cuchilla de Corte</td>
                                    <td>3</td>
                                    <td><Button onClick={() => loadEvidenceHandler()} title="Cargar evidencia"><i className="fa-solid fa-upload"></i></Button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to={`/master-materials/${10072783}`}>10072783</Link>
                                    </td>
                                    <td>Rodamiento de Rodillos</td>
                                    <td>6</td>
                                    <td><Button onClick={() => loadEvidenceHandler()} title="Cargar evidencia"><i className="fa-solid fa-upload"></i></Button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to={`/master-materials/${10088059}`}>10088059</Link>
                                    </td>
                                    <td>Correa de Transmisión</td>
                                    <td>2</td>
                                    <td><Button onClick={() => loadEvidenceHandler()} title="Cargar evidencia"><i className="fa-solid fa-upload"></i></Button></td>
                                </tr>
                            </tbody>
                        </Table> 
                    </Col>
                </Row>
            </CustomModal>
            <CustomModal show={modalEvidence} onHide={() => setModalEvidence(false)} title="Cargar evidencia">
                <Row className="modal__evidence">
                    <Col className="text-center">
                        <p><b>Cámara</b></p>
                        <div className="modal__camera" onClick={() => Swal.fire('Fotografía guardada', 'Su fotografía ha sido guardado con éxito', 'success').then(() => setModalEvidence(false))}>
                            <i className="fa-solid fa-camera"></i>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <p><b>Archivo</b></p>
                        <div className="modal__file" onClick={() => Swal.fire('Archivo cargado', 'Su archivo ha sido cargado con éxito', 'success').then(() => setModalEvidence(false))}>
                            <i className="fa-solid fa-file"></i>
                        </div>
                    </Col>
                </Row>
            </CustomModal>
        </div>
    )
}

export default MaintenanceActivityDetailsPage