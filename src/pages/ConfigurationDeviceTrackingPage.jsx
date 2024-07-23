import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SEO from "../components/SEO"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import './styles/ConfigurationProfilesPage.scss'

const GreenIcon = L.icon({ iconUrl: "/images/leaflet-map/marker-icon-green.png", shadowUrl: "/images/leaflet-map/marker-shadow.png" });
const RedIcon = L.icon({ iconUrl: "/images/leaflet-map/marker-icon-red.png", shadowUrl: "/images/leaflet-map/marker-shadow.png" });



const ConfigurationDeviceTrackingPage = () => {
    const [userLocation, setUserLocation] = useState();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const geoData = [
        {lat: 3.4542, lon: -76.5321, lastUpdate: yesterday},
        {lat: 3.6543, lon: -76.5522, lastUpdate: yesterday},
        {lat: 3.8544, lon: -76.5723, lastUpdate: yesterday},
        {lat: 4.0545, lon: -76.5924, lastUpdate: new Date()},
        {lat: 4.2546, lon: -76.6125, lastUpdate: new Date()},
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
                crd.lastUpdate = new Date();
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
                    <h2><Link className="breadCrumbTitle" to="/configuration">Configuración</Link> &gt; Ubicación dispositivos</h2>
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
                            geoData.map((pos, index) => (<Marker position={[pos.lat, pos.lon]} icon={(new Date() - pos.lastUpdate < 600000) ? GreenIcon : RedIcon}>
                            <Popup>Dispositivo: #{index+1} <br /> Ultima actualización: {(new Date() - pos.lastUpdate < 600000) ? 'Ahora' : pos.lastUpdate.toLocaleString()}</Popup>
                            </Marker>))
                        }
                        {
                            !!userLocation?.latitude && <Marker position={[userLocation.latitude, userLocation.longitude]} icon={(new Date() - userLocation.lastUpdate < 600000) ? GreenIcon : RedIcon}><Popup>Mi dispositivo <br /> Ultima actualización: {(new Date() - userLocation.lastUpdate < 600000) ? 'Ahora' : userLocation.lastUpdate.toLocaleString()}</Popup></Marker>
                        }
                    </MapContainer>
                </Col>
            </Row>
        </div>
    )
}

export default ConfigurationDeviceTrackingPage