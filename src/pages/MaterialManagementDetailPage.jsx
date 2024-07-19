import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Loader from "../components/Loader"
import Message from "../components/Message"

import './styles/MaterialManagementDetailPage.scss'

const ReportMaintenanceDetailPage = ({ materials }) => {

    const params = useParams()

    const [pageLoading, setPageLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        const material = materials.find(material => material.id === Number(params.id))
        setData(material)
        if((params.id && Number.isNaN(params.id)) || !params.id) {
            setError("Material no encontrado")
        }
        setTimeout(() => setPageLoading(false), 1000)
    }, [materials, params])

    return (
        <div className="MaterialManagementDetail-page">
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
                        <figure>
                            <img src={data.image} alt={data.id} />
                        </figure>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <h3>{data.name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{data.description}</p>
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
            </>}
        </div>
    )
}

export default ReportMaintenanceDetailPage