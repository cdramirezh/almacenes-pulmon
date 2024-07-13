import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import FloatingLabel from "react-bootstrap/FloatingLabel"
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
            <Row>
                <Col>
                    <h2><Link className="breadCrumbTitle" to="/configuration">Configuración</Link> &gt; Sincronización</h2>
                </Col>
            </Row>
            <Row>
                <Col className="col-7 offset-5">
                    <FloatingLabel>Ultima Sincronización: {tenMinutesBefore} <Button variant="primary">Sincronizar <span className="fa-solid fa-history"></span></Button></FloatingLabel>
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