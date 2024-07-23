import { LinkContainer } from "react-router-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import SEO from "../components/SEO"

import './styles/ConfigurationProfilesPage.scss'

const ConfigurationSyncPage = () => {
    let tenMinutesBefore = new Date();
    tenMinutesBefore.setMinutes(tenMinutesBefore.getMinutes() - 10);
    tenMinutesBefore = tenMinutesBefore.toLocaleString();

    let fiveMinutesBefore = new Date();
    fiveMinutesBefore.setMinutes(fiveMinutesBefore.getMinutes() - 5);
    fiveMinutesBefore = fiveMinutesBefore.toLocaleString();

    const syncHeaders = ['Documento', 'Fecha creación', 'Orden de Sincronización'];
    const syncBody = [
        ['Aviso de Mantenimiento', fiveMinutesBefore],
        ['Solicitud de Materiales', fiveMinutesBefore]
    ];

    return (
        <div className="configurationProfiles-page">
            <SEO title="Decorceramica - Portal de colaboradores | Mis datos" description="Valida tus datos y comprueba que la información de la que la empresa dispone sea correcta" />
						<Breadcrumb>
							<LinkContainer to='/home'><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
							<LinkContainer to='/configuration'><Breadcrumb.Item>Configuración</Breadcrumb.Item></LinkContainer>
							<Breadcrumb.Item active>Sincronización Offline</Breadcrumb.Item>
						</Breadcrumb>
            <Row>
                <Col>
                    <h2>Sincronización Offline</h2>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="text-end">
                    <span className="d-block">Ultima Sincronización: {tenMinutesBefore}</span>
                    <Button variant="primary" className="my-2">Sincronizar <span className="fa-solid fa-history"></span></Button>
                </Col>
            </Row>
            <Row>
                <Table responsive>
                    <thead>
                        <tr>
                            {syncHeaders.map((header,hIndex) => (<th key={hIndex}>{header}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {syncBody.map((row,index) => (<tr key={index}>{row.map((element, elIndex) => elIndex === 0 ? (<td key={elIndex} style={{textDecoration: 'underline'}}>{element}</td>) : (<td key={elIndex}>{element}</td>))}<td>{index+1}</td></tr>))}
                        
                    </tbody>
                </Table>
            </Row>
        </div>
    )
}

export default ConfigurationSyncPage