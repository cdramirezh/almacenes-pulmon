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
import './styles/TransferPostingPage.scss'

const TransferPostingPage = ({ plants, storageLocations, materials, transferPostings }) => {

    const navigate = useNavigate()

    const [pageLoading, setPageLoading] = useState(false)
    // const [data, setData] = useState([])
    const [data, setData] = useState(transferPostings)
    const [modalNewTransfer, setModalNewTransfer] = useState(false)
    const [modalSelectSourcePlant, setModalSelectSourcePlant] = useState(false)
    const [selectedSourcePlant, setSelectedSourcePlant] = useState("")
    const [modalSelectSourceStorageLocation, setModalSelectSourceStorageLocation] = useState(false)
    const [selectedSourceStorageLocation, setSelectedSourceStorageLocation] = useState("")

    const [modalSelectTargetPlant, setModalSelectTargetPlant] = useState(false)
    const [selectedTargetPlant, setSelectedTargetPlant] = useState("")
    const [modalSelectTargetStorageLocation, setModalSelectTargetStorageLocation] = useState(false)
    const [selectedTargetStorageLocation, setSelectedTargetStorageLocation] = useState("")

    const loadData = () => {
        setPageLoading(true)

        transferPostings = transferPostings.sort((a, b) => {
            if(a.date > b.date) {
                return -1
            } else if(a.date < b.date) {
                return 1
            } else {
                return 0
            }
        })

        setTimeout(() => {
            setData(transferPostings)
            setPageLoading(false)
        }, 1000)
    }

    const clearData = () => {
        setSelectedSourcePlant("")
        setSelectedSourceStorageLocation("")
        setSelectedTargetPlant("")
        setSelectedTargetStorageLocation("")
    }

    materials.length = 3
    const exampleMaterials = materials

    return (
        <div className="transfer-posting-page">
            {pageLoading ? <Loader /> :
            <>
						<Breadcrumb>
							<LinkContainer to='/home'><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
							<Breadcrumb.Item active>Traslado de materiales</Breadcrumb.Item>
						</Breadcrumb>
                <Row>
                    <Col>
                        <h2>Traslado de materiales</h2>
                    </Col>
                    <Col className="text-end">
                        <Button variant="secondary" onClick={() => {clearData(); setModalNewTransfer(true)}}>
                            <b>Crear nuevo</b>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Centro Emisor:</b></Form.Label>
                                        <Form.Control type="text" onClick={() => setModalSelectSourcePlant(true)} value={selectedSourcePlant} onChange={null} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Almacén Emisor:</b></Form.Label>
                                        <Form.Control type="text" onClick={() => setModalSelectSourceStorageLocation(true)} value={selectedSourceStorageLocation} onChange={null} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Centro Destino:</b></Form.Label>
                                        <Form.Control type="text" onClick={() => setModalSelectTargetPlant(true)} value={selectedTargetPlant} onChange={null} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Almacén Destino:</b></Form.Label>
                                        <Form.Control type="text" onClick={() => setModalSelectTargetStorageLocation(true)} value={selectedTargetStorageLocation} onChange={null} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Fecha de inicio:</b></Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label><b>Fecha de fin:</b></Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="form-group">
                                <Form.Label><b>Estado:</b></Form.Label>
                                <Form.Select>
                                    <option>Seleccione una opción</option>
                                    <option>Abierto</option>
                                    <option>Salida de materiales</option>
                                    <option>Pendiente de confirmación</option>
                                </Form.Select>
                            </Form.Group>
                            <Row className="text-center mb-4 mt-2">
                                <Col>
                                    <Button onClick={() => loadData()}>Buscar traslado</Button>
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
                                        <th>Estado</th>
                                        <th>Centro Emisor</th>
                                        <th>Almacen Emisor</th>
                                        <th>Centro Destino</th>
                                        <th>Almacen Destino</th>
                                        <th>Fecha de creación</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {data.map((transfer, idx) => (
                                    <tr key={idx}>
                                        <td><Link to={`/transfer-postings/${transfer.id}`}>{transfer.id}</Link></td>
                                        <td>{transfer.status}</td>
                                        <td>{transfer.sourcePlant}</td>
                                        <td>{transfer.sourceStorageLocation}</td>
                                        <td>{transfer.targetPlant}</td>
                                        <td>{transfer.targetStorageLocation}</td>
                                        <td>{transfer.date}</td>
                                    </tr>    
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                ) : <Message>No hay datos para mostrar</Message>}
            </>}

            <CustomModal show={modalSelectSourcePlant} onHide={() => setModalSelectSourcePlant(false)} title="Seleccionar centro de origen">
                <Table responsive className="text-center selectionModal">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th colSpan={2}>Centro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plants.map(plant => (
                            <tr key={plant.id} onClick={() => { setSelectedSourcePlant(plant.id); setModalSelectSourcePlant(false) }}>
                                <td>{plant.id}</td>
                                <td colSpan={2}>{plant.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CustomModal>

            <CustomModal show={modalSelectSourceStorageLocation} onHide={() => setModalSelectSourceStorageLocation(false)} title="Seleccionar almacén de origen">
                <Table responsive className="text-center selectionModal">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th colSpan={2}>Almacén</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storageLocations.map(storageLocation => (
                            <tr key={storageLocation.id} onClick={() => { setSelectedSourceStorageLocation(storageLocation.id); setModalSelectSourceStorageLocation(false) }}>
                                <td>{storageLocation.id}</td>
                                <td colSpan={2}>{storageLocation.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CustomModal>

            <CustomModal show={modalSelectTargetPlant} onHide={() => setModalSelectTargetPlant(false)} title="Seleccionar centro destino">
                <Table responsive className="text-center selectionModal">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th colSpan={2}>Centro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plants.map(plant => (
                            <tr key={plant.id} onClick={() => { setSelectedTargetPlant(plant.id); setModalSelectTargetPlant(false) }}>
                                <td>{plant.id}</td>
                                <td colSpan={2}>{plant.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CustomModal>

            <CustomModal show={modalSelectTargetStorageLocation} onHide={() => setModalSelectTargetStorageLocation(false)} title="Seleccionar almacén desttino">
                <Table responsive className="text-center selectionModal">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th colSpan={2}>Almacén</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storageLocations.map(storageLocation => (
                            <tr key={storageLocation.id} onClick={() => { setSelectedTargetStorageLocation(storageLocation.id); setModalSelectTargetStorageLocation(false) }}>
                                <td>{storageLocation.id}</td>
                                <td colSpan={2}>{storageLocation.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CustomModal>

            <CustomModal show={modalNewTransfer} onHide={() => {clearData(); setModalNewTransfer(false)}} onAction={() => Swal.fire('Traslado creado', 'Se ha creado el traslado con éxito', 'success').then(() => navigate(`/transfer-postings/22112329`))} actionText="Crear" title="Nuevo traslado de materiales">
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Form.Group className="form-group">
                                    <Form.Label className="mb-0 align-middle"><b>Centro Emisor:</b></Form.Label>
                                    <Form.Control type="text" onClick={() => setModalSelectSourcePlant(true)} value={selectedSourcePlant} onChange={null} readOnly />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="form-group">
                                    <Form.Label className="mb-0 align-middle"><b>Almacén Emisor:</b></Form.Label>
                                    <Form.Control type="text" onClick={() => setModalSelectSourceStorageLocation(true)} value={selectedSourceStorageLocation} onChange={null} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="form-group">
                                    <Form.Label className="mb-0 align-middle"><b>Centro Destino:</b></Form.Label>
                                    <Form.Control type="text" onClick={() => setModalSelectTargetPlant(true)} value={selectedTargetPlant} onChange={null} readOnly />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="form-group">
                                    <Form.Label className="mb-0 align-middle"><b>Almacén Destino:</b></Form.Label>
                                    <Form.Control type="text" onClick={() => setModalSelectTargetStorageLocation(true)} value={selectedTargetStorageLocation} onChange={null} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row className="text-center mt-2">
                            <Col>
                                <h4>Materiales</h4>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" placeholder="Código" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" placeholder="Material" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="number" placeholder="Cantidad" min={1} />
                                    </Col>
                                    <Col xs="auto">
                                        <Button>Agregar</Button>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col>
                                        <Table responsive>
                                            <thead className="text-center">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Material</th>
                                                    <th xs="auto">Cantidad</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-center">
                                                {exampleMaterials.map(material => (
                                                    <tr key={material.id}>
                                                        <td>{material.id}</td>
                                                        <td>{material.name}</td>
                                                        <td xs="auto">{Math.floor(Math.random() * (5 - 1)) + 1}</td>
                                                        <td className="actions">
                                                            <i className="icon fa-solid fa-pen-to-square"></i>
                                                            <i className="icon fa-solid fa-trash"></i>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </CustomModal>
        </div>
    )
}

export default TransferPostingPage