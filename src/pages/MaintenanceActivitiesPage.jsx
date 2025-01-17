import { LinkContainer } from "react-router-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Loader from '../components/Loader'
import Message from "../components/Message"
import CustomModal from "../components/CustomModal"
import Swal from "sweetalert2"
import './styles/MaintenanceActivitiesPage.scss'

const MaintenanceActivitiesPage = ({ maintenanceActivities, fields }) => {

    const navigate = useNavigate()

    const [pageLoading, setPageLoading] = useState(false)
    // const [data, setData] = useState([])
    const [data, setData] = useState(maintenanceActivities)
    const [modalNewActivity, setModalNewActivity] = useState(false)

    const loadData = () => {
        setPageLoading(true)
        setTimeout(() => {
            setData(maintenanceActivities.filter(activity => activity.status === "Completado" || activity.status === "En proceso"))
            setPageLoading(false)
        }, 1000)
    }

    return (
        <div className="maintenance-activities-page">
            {pageLoading ? <Loader /> :
            <>
						<Breadcrumb>
							<LinkContainer to='/home'><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
							<Breadcrumb.Item active>Actividades de mantenimiento</Breadcrumb.Item>
						</Breadcrumb>
                <Row>
                    <Col>
                        <h2>Actividades de mantenimiento</h2>
                    </Col>
                    <Col className="text-end">
                        <Button variant="secondary" onClick={() => setModalNewActivity(true)}>
                            <b>Crear nueva</b>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Código:</b></Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Nombre:</b></Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Estado:</b></Form.Label>
                                        <Form.Select>
                                            <option value="">Seleccione una opción</option>
                                            <option value="01">En Preparación</option>
                                            <option value="02">En Aprobacón</option>
                                            <option value="03">En Proceso</option>
                                            <option value="04">Completado</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Suerte:</b></Form.Label>
                                        <Form.Select>
                                            <option value="">Seleccione una opción</option>
                                            {fields.sort((a, b) => {
                                                if(a.name > b.name) {
                                                    return 1
                                                } else if(a.name < b.name) {
                                                    return -1
                                                } else {
                                                    return 0
                                                }
                                            }).map((field, idx) => (
                                                <option key={field.id} value={field.id}>{field.name}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Fecha de inicio:</b></Form.Label>
                                        <Form.Control type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Fecha de fin:</b></Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="text-center mb-4 mt-2">
                                <Col>
                                    <Button onClick={() => loadData()}>Buscar actividades</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                
                {data.length ? (
                    <Row>
                        <Col>
                            <Table responsive>
                                <thead>
                                    <tr className="text-center">
                                        <th>Código</th>
                                        <th>Nombre</th>
                                        <th>Estado</th>
                                        <th>Fecha de inicio</th>
                                        <th>Fecha de fin</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {data.sort((a, b) => {
                                        if(a.startDate > b.startDate) {
                                            return -1
                                        }  else if (a.startDate < b.startDate) {
                                            return 1
                                        } else {
                                            return 0
                                        }
                                    }).map((activity, idx) => (
                                    <tr key={idx}>
                                        <td><Link to={`/maintenance-activities/${activity.id}`}>{activity.id}</Link></td>
                                        <td>{activity.name}</td>
                                        <td>{activity.status}</td>
                                        <td>{activity.startDate}</td>
                                        <td>{activity.endDate}</td>
                                    </tr>    
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                ) : <Message>No hay datos para mostrar</Message>}
            </>}
            <CustomModal show={modalNewActivity} onHide={() => setModalNewActivity(false)} onAction={() => Swal.fire('Actividad creada', 'Se ha creado la actividad y ha sido enviada a aprobación con éxito', 'success').then(() => navigate(`/maintenance-activities/48695095`))} actionText="Crear" title="Nueva actividad de manetenimiento">
                <Row>
                    <Row className="my-2">
                        <Col sm={2} className="text">
                            <Form.Label className="mb-0 align-middle"><b>Código:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="number" />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2} className="text">
                            <Form.Label className="mb-0 align-middle"><b>Nombre:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2} className="text">
                            <Form.Label className="mb-0 align-middle"><b>Fecha de inicio:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2} className="text">
                            <Form.Label className="mb-0 align-middle"><b>Fecha de fin:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="date" />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col>
                            <Form.Label><b>Justificación:</b></Form.Label>
                            <Form.Control as="textarea" style={{ height: '100px' }} />
                        </Col>
                    </Row>
                </Row>
            </CustomModal>
        </div>
    )
}

export default MaintenanceActivitiesPage