import { useState } from "react"
import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Loader from '../components/Loader'
import Message from "../components/Message"

const FieldsPage = ({ fields }) => {

    const [pageLoading, setPageLoading] = useState(false)
    const [data, setData] = useState([])

    const loadData = () => {
        setPageLoading(true)
        setTimeout(() => {
            setData(fields)
            setPageLoading(false)
        }, 1000)
    }

    return (
        <div className="fields-page">
            {pageLoading ? <Loader /> :
            <>
                <Row>
                    <Col>
                        <h2>Administración de suertes</h2>
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
                            <Form.Label className="mb-0 align-middle"><b>Tipo de suelo:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Select>
                                <option value="">Seleccione una opción</option>
                                {Array.from(new Set(fields.map(field => field.soil))).sort().map(((record, idx) => (
                                    <option key={idx} value={idx}>{record}</option>
                                )))}
                            </Form.Select>
                        </Col>
                    </Row>
                </Row>
                <Row>
                <Row className="my-2">
                    <Col sm={2} className="text-end">
                        <Form.Label className="mb-0 align-middle"><b>Fecha inicio de siembra:</b></Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                    </Col>
                </Row>
                </Row>
                <Row>
                    <Row className="my-2">
                        <Col sm={2} className="text-end">
                            <Form.Label className="mb-0 align-middle"><b>Fecha fin de siembra:</b></Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="date" />
                        </Col>
                    </Row>
                </Row>
                
                <Row className="text-center mb-5 mt-2">
                    <Col>
                        <Button onClick={() => loadData()}>Buscar suertes</Button>
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
                                        <th>Tamaño (ha)</th>
                                        <th>Tipo de suelo</th>
                                        <th>Fecha siembra</th>
                                        <th>Ubicación</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {data.map((field, idx) => (
                                    <tr key={idx}>
                                        <td><Link to={`/fields/${field.id}`}>{field.id}</Link></td>
                                        <td>{field.name}</td>
                                        <td>{field.size}</td>
                                        <td>{field.soil}</td>
                                        <td>{field.seedtime.toISOString().substring(0, 10)}</td>
                                        <td>
                                            <a href={`https://maps.google.com/?q=${field.location.lat},${field.location.lon}`} target="_blank" rel="noreferrer">Ir...</a>
                                        </td>
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

export default FieldsPage