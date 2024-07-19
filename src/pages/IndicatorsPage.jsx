import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles/IndicatorsPage.scss'

const IndicatorPage = () => {
    return (
        <div className="indicators-page">
            <Row>
                <Col>
                    <div className="indicators__section">
                        <h3>Actividades de mantenimiento</h3>
                        <div className="indicators">
                            <article className="indicator">
                                <Link to="/maintenance-activities/48695095">
                                    <span className="indicator__title">Actividades en proceso</span>
                                    <span className="indicator__value">1</span>
                                </Link>
                            </article>

                            <article className="indicator">
                                <Link to="/activities-approval">
                                    <span className="indicator__title">Actividades por aprobar</span>
                                    <span className="indicator__value">4</span>
                                </Link>
                            </article>
                        </div>
                    </div>


                    <div className="indicators__section">
                        <h3>Traslado de materiales</h3>
                        <div className="indicators">


                            <article className="indicator">
                                <Link to="/transfer-postings/23556430">
                                    <span className="indicator__title">Traslados biertos</span>
                                    <span className="indicator__value">1</span>
                                </Link>
                            </article>

                            <article className="indicator">
                                <Link to="transfer-postings/23556429">
                                    <span className="indicator__title">Traslados con salida</span>
                                    <span className="indicator__value">1</span>
                                </Link>
                            </article>

                            <article className="indicator">
                                <Link to="/transfer-postings/23556428">
                                    <span className="indicator__title">Pendientes confirmación</span>
                                    <span className="indicator__value">1</span>
                                </Link>
                            </article>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default IndicatorPage