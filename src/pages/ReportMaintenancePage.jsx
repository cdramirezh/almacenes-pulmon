import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import SEO from "../components/SEO"

import './styles/ConfigurationProfilesPage.scss'

const ReportMaintenancePage = () => {
    let fiveMinutesBefore = new Date();
    fiveMinutesBefore.setMinutes(fiveMinutesBefore.getMinutes() - 5);
    fiveMinutesBefore = fiveMinutesBefore.toLocaleString();

    const syncHeaders = ['ID', 'Responsable', 'Fecha creación', 'Hora de creación'];
    const syncBody = [
        ['32456789', 'Mutahar Doe', '2024-07-11', '03:41 PM'],
        ['32456790', 'Mudea Doe', '2024-07-12', '04:52 PM'],
        ['32456791', 'Ali Doe', '2024-07-13', '05:13 PM']
    ];

    return (
        <div className="configurationProfiles-page">
            <SEO title="Decorceramica - Portal de colaboradores | Mis datos" description="Valida tus datos y comprueba que la información de la que la empresa dispone sea correcta" />
            <Row>
                <Col>
                    <h2><Link className="breadCrumbTitle" to="/monitor">Reportes y monitoreo</Link> &gt; Ordenes de Mantenimiento</h2>
                </Col>
            </Row>
            <Row>
                <Col className="col-2 offset-10">
                    <Button variant="primary">Descargar <span className="fa-solid fa-download"></span></Button>
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
                        {syncBody.map((row,index) => (<tr key={index}>{row.map((element, elIndex) => elIndex === 0 ? (<td key={elIndex} style={{textDecoration: 'underline'}}>{element}</td>) : (<td key={elIndex}>{element}</td>))}</tr>))}
                        
                    </tbody>
                </Table>
            </Row>
        </div>
    )
}

export default ReportMaintenancePage