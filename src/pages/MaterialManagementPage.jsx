import { useState } from "react"
import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import { Breadcrumb, Button, Table } from "react-bootstrap"
import Loader from "../components/Loader"
import Message from "../components/Message"

import './styles/MaterialManagementPage.scss'
import { LinkContainer } from "react-router-bootstrap"

const ReportMaintenancePage = ({ materials }) => {

    const [pageLoading, setPageLoading] = useState(false)
    // const [data, setData] = useState([])
    const [data, setData] = useState(materials)

    const loadData = () => {
        setPageLoading(true)
        setTimeout(() => {
            setData(materials)
            setPageLoading(false)
        }, 1000)
    }

    return (
        <div className="MaterialManagement-page">
            {pageLoading ? <Loader /> :
            <>
						<Breadcrumb>
						<LinkContainer to="/home">
							<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
						</LinkContainer>
							<Breadcrumb.Item active>Maestro de materiales</Breadcrumb.Item>
						</Breadcrumb>
                <Row>
                    <Col>
                        <h2>Maestro de materiales</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="form-group">
                                <Form.Label><b>Código:</b></Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label><b>Nombre:</b></Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Row className="text-center mb-4 mt-2">
                                <Col>
                                    <Button onClick={() => loadData()}>Buscar materiales</Button>
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
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {data.map((material, idx) => (
                                    <tr key={idx}>
                                        <td><Link to={`/master-materials/${material.id}`}>{material.id}</Link></td>
                                        <td>{material.name}</td>
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

export default ReportMaintenancePage