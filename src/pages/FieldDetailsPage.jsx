import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Loader from '../components/Loader'
import Message from "../components/Message"
import Card from "react-bootstrap/Card"
import './styles/FieldDetailsPage.scss'

const FieldDetailsPage = ({ fields }) => {
    const params = useParams()
    const [pageLoading, setPageLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const fieldId = Number(params.id)
        const field = fields.find(field => field.id === fieldId)
        field ? setData(field) : setError('Suerte no encontrada')
        
        setTimeout(() => setPageLoading(false), 1000)
    }, [fields, params])

    return (
        <div className="field-details-page">
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
                        <Card className="basic-details">
                            <Row>
                                <Col xs={12} sm={12} md={6} className="left">
                                    <img className="basic-details__img" src={data.image} alt="Suerte" />
                                </Col>
                                <Col xs={12} sm={12} md={6} className="right">
                                    <Card className="basic-details__basic-info">
                                        <div className="basic-details__characteistic">
                                            <h5>ID</h5>
                                            <span>{data.id}</span>
                                        </div>
                                        <div className="field-characteistic">
                                            <h5>Nombre</h5>
                                            <span>{data.name}</span>
                                        </div>
                                        <div className="field-characteistic">
                                            <h5>Tamaño</h5>
                                            <span>{`${data.size} ha`}</span>
                                        </div>
                                        <div className="field-characteistic">
                                            <h5>Tipo de suelo</h5>
                                            <span>{data.soil}</span>
                                        </div>
                                        <div className="field-characteistic">
                                            <h5>Tipo de riego</h5>
                                            <span>{data.irrigationSystem}</span>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className="field__map">
                    <Col>
                        <iframe title="map" src={data.map} />
                    </Col>
                </Row>
            </>}
        </div>
    )
}

export default FieldDetailsPage