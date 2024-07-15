import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { Accordion } from "react-bootstrap"

const ActivitiesApproval = ({ maintenanceActivities, equipments }) => {

    return (
        <div className="equipments-page">
            <>
                <Row>
                    <Col>
                        <h2>Aprobación de actividades</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><b>Pendientes de aprobar</b></Accordion.Header>
                                <Accordion.Body>
                                    <Table responsive>
                                        <thead>
                                            <tr className="text-center">
                                                <th>Id</th>
                                                <th>Actividad</th>
                                                <th>Fecha de inicio</th>
                                                <th>Fecha de fin</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {maintenanceActivities.filter(activity => activity.status === "En aprobación").sort((a, b) => {
                                                if(a.startDate > b.startDate) {
                                                    return 1
                                                }  else if (a.startDate < b.startDate) {
                                                    return -1
                                                } else {
                                                    return 0
                                                }
                                            }).map((activity, idx) => (
                                            <tr key={idx}>
                                                <td>
                                                    <Link to={`/maintenance-activities/${activity.id}`}>{activity.id}</Link>
                                                </td>
                                                <td>{activity.name}</td>
                                                <td>{activity.startDate}</td>
                                                <td>{activity.endDate}</td>
                                                <td>
                                                    <Button size="sm">Apobar</Button>
                                                </td>
                                            </tr>    
                                            ))}
                                        </tbody>
                                    </Table> 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><b>Historial de aprobaciones</b></Accordion.Header>
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
                                            {maintenanceActivities.filter(activity => activity.status === "Completado" || activity.status === "En proceso").sort((a, b) => {
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
                        </Accordion>
                    </Col>
                </Row>
            </>
        </div>
    )
}

export default ActivitiesApproval