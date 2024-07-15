import { useState } from "react"
import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Loader from '../components/Loader'
import Message from "../components/Message"

const MaintenanceActivitiesPage = ({ maintenanceActivities }) => {

    const [pageLoading, setPageLoading] = useState(false)
    const [data, setData] = useState([])

    const loadData = () => {
        setPageLoading(true)
        setTimeout(() => {
            setData(maintenanceActivities)
            setPageLoading(false)
        }, 1000)
    }

    return (
        <div className="maintenance-activities-page">
            {pageLoading ? <Loader /> :
            <>
                <Row>
                    <Col>
                        <h2>Actividades de mantenimiento</h2>
                    </Col>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2} className="text-end">
                            <Form.Label className="mb-0 align-middle"><b>Código:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="number" />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2} className="text-end">
                            <Form.Label className="mb-0 align-middle"><b>Nombre:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2} className="text-end">
                            <Form.Label className="mb-0 align-middle"><b>Estado:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Select>
                                <option value="">Seleccione una opción</option>
                                <option value="01">En preparación</option>
                                <option value="02">En proceso</option>
                                <option value="03">Completado</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2} className="text-end">
                            <Form.Label className="mb-0 align-middle"><b>Fecha de inicio:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2} className="text-end">
                            <Form.Label className="mb-0 align-middle"><b>Fecha de fin:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="date" />
                        </Col>
                    </Row>
                </Row>
                <Row className="text-center mb-4 mt-2">
                    <Col>
                        <Button onClick={() => loadData()}>Buscar actividades</Button>
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
        </div>
    )
}

export default MaintenanceActivitiesPage