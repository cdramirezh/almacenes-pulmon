import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
//import Button from "react-bootstrap/Button"
import CanvasJSReact from '@canvasjs/react-charts';
import FloatingLabel from "react-bootstrap/FloatingLabel"
import SEO from "../components/SEO"

import './styles/ConfigurationProfilesPage.scss'

//const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;



const MonitorPage = () => {

    const [options, setOptions] = useState({
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
    })

    useEffect(() => {
        setInterval(() => {
            const tempOptions = JSON.parse(JSON.stringify(options))
            const tempData = tempOptions.data[0].dataPoints;
            const lastRow = tempData.pop();
            const newLastRow = {x: lastRow.x + 1, y: Math.floor((Math.random()*20 + 50))}
            tempData.push(lastRow);
            tempData.push(newLastRow);
            tempOptions.data[0].dataPoints = tempData;
            setOptions(tempOptions);
        }, 10000);
    }, [options]);

    let tenMinutesBefore = new Date();
    tenMinutesBefore.setMinutes(tenMinutesBefore.getMinutes() - 10);
    tenMinutesBefore = tenMinutesBefore.toLocaleString();

    return (
        <div className="configurationProfiles-page">
            <SEO title="Decorceramica - Portal de colaboradores | Mis datos" description="Valida tus datos y comprueba que la información de la que la empresa dispone sea correcta" />
            <Row>
                <Col>
                    <h2>Reportes y monitoreo</h2>
                </Col>
            </Row>
            <Row>
                <CanvasJSChart options = {options}/>
            </Row>
            <Row>
                <FloatingLabel>Reportes</FloatingLabel>
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
                            <td><Link to="/reportMaintenance">Ordenes de Mantenimiento</Link></td>
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