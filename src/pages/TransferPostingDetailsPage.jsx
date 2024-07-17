import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import Loader from '../components/Loader'
import './styles/TransferPostingDetailsPage.scss'

const TransferPostingDetailsPage = ({ plants, storageLocations, materials, transferPostings }) => {

    const params = useParams()

    const [pageLoading, setPageLoading] = useState(true)
    const [data, setData] = useState(null)
    
    useEffect(() => {
        const transferPostingId = params.id
        const transfer = transferPostings.find(transfer => transfer.id === Number(transferPostingId))
        setData(transfer)

        setTimeout(() => {
            setPageLoading(false)
        }, 1000)
    }, [params, transferPostings])

    return (
        <div className="transfer-posting-details-page">
            {pageLoading ? <Loader /> :
            <>
                <Row>
                    <Col>
                        <h2>Traslado de materiales: {data.id}</h2>
                    </Col>
                </Row>
                <Card>
                    <Row className="basic-info">
                        <Col>
                            <div className="card__info">
                                <Form.Label>
                                    <b>Fecha:</b>
                                </Form.Label>
                                <Form.Control defaultValue={data.date} disabled />
                            </div>
                            <Row>
                                <Col>
                                    <Card>
                                        <h3 className="card__title">Datos de origen</h3>
                                        <figure className="card__img">
                                            <img src={storageLocations.find(storage => storage.id === data.sourceStorageLocation).image} alt={data.id} />
                                        </figure>
                                        <div className="card__info">
                                            <Form.Label>
                                                <b>Centro:</b>
                                            </Form.Label>
                                            <Form.Control defaultValue={data.sourcePlant} disabled />
                                        </div>
                                        <div className="card__info">
                                            <Form.Label>
                                                <b>Almacén:</b>
                                            </Form.Label>
                                            <Form.Control defaultValue={data.sourceStorageLocation} disabled />
                                        </div>
                                        <div className="card__info">
                                            <Form.Label>
                                                <b>Fecha de salida:</b>
                                            </Form.Label>
                                            <Form.Control defaultValue={data.outputDate} disabled />
                                        </div>
                                        <div className="card__info">
                                            <Form.Label>
                                                <b>Hora de salida:</b>
                                            </Form.Label>
                                            <Form.Control defaultValue={data.outputTime} disabled />
                                        </div>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <h3 className="card__title">Datos destino</h3>
                                        <figure className="card__img">
                                            <img src={storageLocations.find(storage => storage.id === data.targetStorageLocation).image} alt={data.id} />
                                        </figure>
                                        <div className="card__info">
                                            <Form.Label>
                                                <b>Centro:</b>
                                            </Form.Label>
                                            <Form.Control defaultValue={data.targetPlant} disabled />
                                        </div>
                                        <div className="card__info">
                                            <Form.Label>
                                                <b>Almacén:</b>
                                            </Form.Label>
                                            <Form.Control defaultValue={data.targetStorageLocation} disabled />
                                        </div>
                                        <div className="card__info">
                                            <Form.Label>
                                                <b>Fecha de entrada:</b>
                                            </Form.Label>
                                            <Form.Control defaultValue={data.inputDate} disabled />
                                        </div>
                                        <div className="card__info">
                                            <Form.Label>
                                                <b>Hora de entrada:</b>
                                            </Form.Label>
                                            <Form.Control defaultValue={data.inputTime} disabled />
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="material-list">
                        <Col>
                            <h4 className="material-list__title">Materiales</h4>
                            <Table className="material-list__table" responsive bordered>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Material</th>
                                        <th>Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.materials.map((material, idx) => (
                                        <tr key={idx}>
                                            <td>{material.id}</td>
                                            <td>{material.name}</td>
                                            <td>{material.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Card>
            </>}
        </div>
    )
}

export default TransferPostingDetailsPage