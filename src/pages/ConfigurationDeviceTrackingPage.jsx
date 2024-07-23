import { LinkContainer } from "react-router-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { useEffect, useState } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SEO from "../components/SEO"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import './styles/ConfigurationProfilesPage.scss'

const icon = L.icon({ iconUrl: "/images/leaflet-map/marker-icon.png", shadowUrl: "/images/leaflet-map/marker-shadow.png" });



const ConfigurationDeviceTrackingPage = () => {
    const [userLocation, setUserLocation] = useState();
    const geoData = [
        [ 3.4542, -76.5321],
        [ 3.4553, -76.5332],
        [ 3.4564, -76.5343],
        [ 3.4575, -76.5354],
        [ 3.4586, -76.5365],
    ];

    useEffect(() => {
        if (!userLocation) {
            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            };
              
            const success = (pos) => {
                const crd = pos.coords;
                setUserLocation(crd);
            }
              
            const error = (err) => {
                setUserLocation({});
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }
              
            navigator.geolocation.getCurrentPosition(success, error, options);
        }

    }, [userLocation]);

    return (
        <div className="configurationProfiles-page">
            <SEO title="Decorceramica - Portal de colaboradores | Mis datos" description="Valida tus datos y comprueba que la información de la que la empresa dispone sea correcta" />
            <Row>
                <Col>
									<Breadcrumb>
										<LinkContainer to='/home'><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
										<LinkContainer to='/configuration'><Breadcrumb.Item>Configuración</Breadcrumb.Item></LinkContainer>
										<Breadcrumb.Item active>Ubicación y dispositivos</Breadcrumb.Item>
									</Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MapContainer style={{ width: "100%", height: "100vh" }} center={[ 3.4542, -76.5321]} zoom={5} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            geoData.map((pos, index) => (<Marker position={pos} icon={icon} key={index}>
                            <Popup>Dispositivo: #{index+1}</Popup>
                            </Marker>))
                        }
                        {
                            !!userLocation?.latitude && <Marker position={[userLocation.latitude, userLocation.longitude]} icon={icon}><Popup>Mi dispositivo</Popup></Marker>
                        }
                    </MapContainer>
                </Col>
            </Row>
        </div>
    )
}

export default ConfigurationDeviceTrackingPage