import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
//import Button from "react-bootstrap/Button"
import CanvasJSReact from '@canvasjs/react-charts';
import SEO from "../components/SEO"
import Firm from "../components/Firm"

import './styles/ConfigurationProfilesPage.scss'
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;



const MonitorPage = () => {

    const pieOptions = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Caña por suerte"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 18, label: "El Paraíso" },
                { y: 49, label: "La Esperanza" },
                { y: 9, label: "Las Flores" },
                { y: 5, label: "San Joaquín" },
                { y: 19, label: "Los Naranjos" }
            ]
        }]
    }

    const barOptions = {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Materiales más utilizados"
        },
        axisX: {
            title: "Social Network",
            reversed: true,
        },
        axisY: {
            title: "Monthly Active Users",
            includeZero: true
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y:  2200000000, label: "Filtro de Aire" },
                { y:  1800000000, label: "Filtro de Combustible" },
                { y:  800000000, label: "Cuchilla de Corte" },
                { y:  563000000, label: "Rodamiento de Rodillos" },
                { y:  376000000, label: "Correa de Transmisión" },
                { y:  336000000, label: "Bujía de Encendido" },
                { y:  330000000, label: "Sensor de Temperatura" }
            ]
        }]
    }

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Ordenes de mantenimiento por semana"
        },
        axisY: {
            title: "# Ordenes mantenimiento",
            suffix: "#"
        },
        axisX: {
            title: "Semana",
            prefix: "W",
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Semana {x}: {y} ordenes",
            dataPoints: [
                { x: 1, y: 64 },
                { x: 2, y: 61 },
                { x: 3, y: 64 },
                { x: 4, y: 62 },
                { x: 5, y: 64 },
                { x: 6, y: 60 },
                { x: 7, y: 58 },
                { x: 8, y: 59 },
                { x: 9, y: 53 },
                { x: 10, y: 54 },
                { x: 11, y: 61 },
                { x: 12, y: 60 },
                { x: 13, y: 55 },
                { x: 14, y: 60 },
                { x: 15, y: 56 },
                { x: 16, y: 60 },
                { x: 17, y: 59 },
                { x: 18, y: 63 },
                { x: 19, y: 58 },
                { x: 20, y: 54 },
                { x: 21, y: 59 },
                { x: 22, y: 64 },
                { x: 23, y: 59 }
            ]
        }]
    }

    // useEffect(() => {
    //     setInterval(() => {
    //         const tempOptions = JSON.parse(JSON.stringify(options))
    //         const tempData = tempOptions.data[0].dataPoints;
    //         const lastRow = tempData.pop();
    //         const newLastRow = {x: lastRow.x + 1, y: Math.floor((Math.random()*20 + 50))}
    //         tempData.push(lastRow);
    //         tempData.push(newLastRow);
    //         tempOptions.data[0].dataPoints = tempData;
    //         setOptions(tempOptions);
    //     }, 10000);
    // }, [options]);

    let tenMinutesBefore = new Date();
    tenMinutesBefore.setMinutes(tenMinutesBefore.getMinutes() - 10);
    tenMinutesBefore = tenMinutesBefore.toLocaleString();

    return (
        <div className="configurationProfiles-page">
            <SEO title="Decorceramica - Portal de colaboradores | Mis datos" description="Valida tus datos y comprueba que la información de la que la empresa dispone sea correcta" />
						<Breadcrumb>
						<LinkContainer to='/home'>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
						</LinkContainer>
							<Breadcrumb.Item active>Monitoreo</Breadcrumb.Item>
						</Breadcrumb>
            <Row>
                <Firm/>
            </Row>
            <Row>
                <Col>
                    <h2>Reportes y monitoreo</h2>
                </Col>
            </Row>
            <Row>
                <CanvasJSChart options = {options}/>
            </Row>
            <Row>
                <Col className="col-12 col-md-6">
                    <CanvasJSChart options = {pieOptions}/>
                </Col>
                <Col className="col-12 col-md-6">
                    <CanvasJSChart options = {barOptions}/>
                </Col>
            </Row>
            <Row className="mt-4">
                <h4>Reportes</h4>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Reporte</th>
                            <th>Registros</th>
                            <th>Ultima Fecha de actualización</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to="/report-maintenance">Ordenes de Mantenimiento</Link></td>
                            <td>3</td>
                            <td>{tenMinutesBefore}</td>
                        </tr>                        
                    </tbody>
                </Table>
            </Row>
        </div>
    )
}

export default MonitorPage