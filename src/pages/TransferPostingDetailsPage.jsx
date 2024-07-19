import { LinkContainer } from "react-router-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import Loader from '../components/Loader'
import './styles/TransferPostingDetailsPage.scss'
import { Button } from "react-bootstrap"
import CustomModal from "../components/CustomModal"
import Firm from '../components/Firm'
import Swal from "sweetalert2"

const TransferPostingDetailsPage = ({ storageLocations, transferPostings }) => {

    const params = useParams()
    const navigate = useNavigate()

    const [pageLoading, setPageLoading] = useState(true)
    const [data, setData] = useState(null)
    const [modalEvidence, setModalEvidence] = useState(false)
    const [modalSign, setModalSign] = useState(false)
    
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
						<Breadcrumb>
							<LinkContainer to='/home'><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
							<LinkContainer to='/transfer-postings'><Breadcrumb.Item>Traslado de materiales</Breadcrumb.Item></LinkContainer>
							<Breadcrumb.Item active>{data.id}</Breadcrumb.Item>
						</Breadcrumb>
                <Row>
                    <Col>
                        <h2>Traslado de materiales: {data.id}</h2>
                    </Col>
                    {data.status === "Pendiente de confirmación" &&
                    <Col className="text-end">
                        <Button onClick={() => {window.scroll(0, 0); setModalEvidence(true)}}>Completar traslado</Button>
                    </Col>}
                </Row>
                <Card>
                    <Row className="basic-info">
                        <Col>
                            <div className="card__info">
                                <Form.Label>
                                    <b>Fecha de creación:</b>
                                </Form.Label>
                                <Form.Control defaultValue={data.date} disabled />
                            </div>
                            <div className="card__info">
                                <Form.Label>
                                    <b>Estado:</b>
                                </Form.Label>
                                <Form.Control defaultValue={data.status} disabled />
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
                                        {data.outputDate ? <>
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
                                        </> :
                                        <Row className="text-center">
                                            <Col>
                                                <Button>Confirmar salida de material</Button>
                                            </Col>
                                        </Row>}
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
                                        {data.inputDate ? <>
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
                                        </> :
                                        <Row className="text-center">
                                            <Col>
                                                <Button>Confirmar entrada de material</Button>
                                            </Col>
                                        </Row>}
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
            <CustomModal show={modalEvidence} onHide={() => setModalEvidence(false)} title="Cargar evidencias">
                <Row className="modal__evidence">
                    <Col className="text-center">
                        <p><b>Cámara</b></p>
                        <div className="modal__camera" onClick={() => Swal.fire('Fotografía guardada', 'Su fotografía ha sido guardado con éxito', 'success').then(() => setModalEvidence(false)).then(() => setModalSign(true))}>
                            <i className="fa-solid fa-camera"></i>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <p><b>Archivo</b></p>
                        <div className="modal__file" onClick={() => Swal.fire('Archivo cargado', 'Su archivo ha sido cargado con éxito', 'success').then(() => setModalEvidence(false)).then(() => setModalSign(true))}>
                            <i className="fa-solid fa-file"></i>
                        </div>
                    </Col>
                </Row>
            </CustomModal>

            <CustomModal show={modalSign} onHide={() => setModalSign(false)} title="Firmar" actionText="Guardar" onAction={() => Swal.fire('Firma guardada', 'Su firma ha sido guardada con éxito', 'success')
                .then(() => {
                    setModalSign(false)
                    setPageLoading(true)
                }).then(() => setTimeout(() => navigate("/transfer-postings"), 1000))}>
                <Row className="modal__sign">
                    <Col>
                        <div>
                            <Firm />
                        </div>
                    </Col>
                </Row>
            </CustomModal>
        </div>
    )
}

export default TransferPostingDetailsPage