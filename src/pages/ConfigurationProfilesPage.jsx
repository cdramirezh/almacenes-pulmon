import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import SEO from "../components/SEO"

import './styles/ConfigurationProfilesPage.scss'
import { LinkContainer } from "react-router-bootstrap";
import { Breadcrumb } from "react-bootstrap";

const ConfigurationProfilesPage = () => {
    const rolHeaders = ['Nombre', 'Descripción', 'Usuarios Asignados', 'Administrar'];
    const rolBody = [
        ['Administrador', 'Este rol otorga permisos sobre la aplicación', '1'],
        ['Supervisor', 'Este rol es para usuarios supervisores', '1'],
        ['Controlador', 'Este rol es para usuarios controladores', '1'],
        ['Seguridad', 'Este rol es para usuarios de seguridad', '1'],
        ['Mecánico', 'Este rol es para usuarios mecanicos', '1'],
        ['Analísta', 'Este rol es para usuarios analistas', '1']
    ];

    const userHeaders = ['Nombres', 'Apellidos', 'Correo', 'rol', 'Administrar'];
    const userBody = [
        ['John','Doe','John@riopaila.com','Administrador'],
        ['Jane','Doe','Jane@riopaila.com','Supervisor'],
        ['Muhammad','Doe','Muhammad@riopaila.com','Controlador'],
        ['Ali','Doe','Ali@riopaila.com','Seguridad'],
        ['Mutahar','Doe','Mutahar@riopaila.com','Mecánico'],
        ['Mudea','Doe','Mudea@riopaila.com','Analísta']
    ];

    return (
        <div className="configurationProfiles-page">
            <SEO title="Decorceramica - Portal de colaboradores | Mis datos" description="Valida tus datos y comprueba que la información de la que la empresa dispone sea correcta" />
						<Breadcrumb>
							<LinkContainer to='/home'><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
							<LinkContainer to='/configuration'><Breadcrumb.Item>Configuración</Breadcrumb.Item></LinkContainer>
							<Breadcrumb.Item active>Roles y perfiles</Breadcrumb.Item>
						</Breadcrumb>
            <Row>
                <Tabs defaultActiveKey="profile" id="ProfileUsersTab" className="mb-3">
                    <Tab eventKey="profile" title="Roles">
                        <Row>
                            <Col className="col-2 offset-10">
                                <Button variant="primary">Crear Roles</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        {rolHeaders.map((header,hIndex) => (<th key={hIndex}>{header}</th>))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rolBody.map((row, rowIndex) => (<tr key={rowIndex}>{row.map((element, elIndex) => (<td key={elIndex}>{element}</td>))}<td><Button variant="primary"><span className="fa-solid fa-edit"></span></Button></td></tr>))}
                                    
                                </tbody>
                            </Table>
                        </Row>
                    </Tab>
                    <Tab eventKey="Users" title="Usuarios">
                        <Table responsive>
                            <thead>
                                <tr>
                                    {userHeaders.map((header,hIndex) => (<th key={hIndex} >{header}</th>))}
                                </tr>
                            </thead>
                            <tbody>
                                {userBody.map((row, rowIndex) => (<tr  key={rowIndex}>{row.map((element, elIndex) => (<td key={elIndex}>{element}</td>))}<td><Button variant="primary"><span className="fa-solid fa-edit"></span></Button></td></tr>))}
                                
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Row>
        </div>
    )
}

export default ConfigurationProfilesPage