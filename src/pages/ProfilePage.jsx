import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Breadcrumb, Figure, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./styles/ProfilePage.scss";

const ProfilePage = () => {
	const supplierData = {
		DOC_TYPE: "13",
		DOC_NUMBER: "123",
		BUSINESS_NAME: "Juan Pérez",
		EMAIL: "juan.perez@riopaila.com.co",
		MOBILE: "3001238800",
		TELEPHONE: "(600)1328800",
		COUNTRY_DESC: "Colombia",
		REGION_DESC: "Valle",
		CITY_DESC: "Cali",
		POSTAL_CODE: "123456",
		ADDRESS: "Cll 10 # 22-33",
		TAX_CLASS_DESC: "",
		BANK_ACCOUNT: "",
		PAYMENT_CONDITION_DESC: "",
		ACCOUNTING_TAXES: "",
	};

	return (
		<div className="profile-page">
			<Breadcrumb>
			<LinkContainer to='/home'>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
			</LinkContainer>
				<Breadcrumb.Item active>Perfil</Breadcrumb.Item>
			</Breadcrumb>
			<Row>
				<Col>
					<h2>Mis Datos</h2>
				</Col>
			</Row>
			{supplierData && (
				<>
					<Row>
						<Col>
							<Figure className="image-container">
								<Image className="image-profile" src="/images/profile.png" />
							</Figure>
							<Form.Group>
								<Row>
									<Col md={6}>
										<Form.Group className="form-group">
											<FloatingLabel label="Tipo de identificación">
												<Form.Select name="idType" defaultValue={supplierData.DOC_TYPE} disabled>
													<option value="">Seleccione un tipo de identificación</option>
													<option value="13">Cédula de ciudadanía</option>
													<option value="22">Cédula de extranjería</option>
													<option value="31">NIT</option>
													<option value="41">Pasaporte</option>
												</Form.Select>
												<div className="invalid-feedback">Indique tipo de identificación</div>
											</FloatingLabel>
										</Form.Group>
									</Col>
									<Col md={6}>
										<Form.Group className="form-group">
											<FloatingLabel label="Número de identificación">
												<Form.Control
													name="idNumber"
													defaultValue={supplierData.DOC_NUMBER}
													disabled
												/>
											</FloatingLabel>
										</Form.Group>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group className="form-group">
								<FloatingLabel label="Razón Social">
									<Form.Control
										name="businessName"
										defaultValue={supplierData.BUSINESS_NAME}
										disabled
									/>
								</FloatingLabel>
							</Form.Group>
							<Form.Group className="form-group">
								<FloatingLabel label="Correo electrónico">
									<Form.Control name="email" defaultValue={supplierData.EMAIL} disabled />
								</FloatingLabel>
							</Form.Group>
							<Form.Group>
								<Row>
									<Col md={6}>
										<Form.Group className="form-group">
											<FloatingLabel label="Celular">
												<Form.Control name="mobile" defaultValue={supplierData.MOBILE} disabled />
											</FloatingLabel>
										</Form.Group>
									</Col>
									<Col md={6} className="form-group">
										<FloatingLabel label="Teléfono">
											<Form.Control
												name="telephone"
												defaultValue={supplierData.TELEPHONE}
												disabled
											/>
										</FloatingLabel>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row>
									<Col md={6}>
										<Form.Group className="form-group">
											<FloatingLabel label="País">
												<Form.Control
													name="country"
													defaultValue={supplierData.COUNTRY_DESC}
													disabled
												/>
											</FloatingLabel>
										</Form.Group>
									</Col>
									<Col md={6}>
										<Form.Group className="form-group">
											<FloatingLabel label="Departamento">
												<Form.Control
													name="region"
													defaultValue={supplierData.REGION_DESC}
													disabled
												/>
											</FloatingLabel>
										</Form.Group>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row>
									<Col md={6}>
										<Form.Group className="form-group">
											<FloatingLabel label="Ciudad">
												<Form.Control name="city" defaultValue={supplierData.CITY_DESC} disabled />
											</FloatingLabel>
										</Form.Group>
									</Col>
									<Col md={6}>
										<Form.Group className="form-group">
											<FloatingLabel label="Código postal">
												<Form.Control
													name="postalCode"
													defaultValue={supplierData.POSTAL_CODE}
													disabled
												/>
											</FloatingLabel>
										</Form.Group>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group className="form-group">
								<FloatingLabel label="Dirección">
									<Form.Control name="address" defaultValue={supplierData.ADDRESS} disabled />
								</FloatingLabel>
							</Form.Group>
							{/* <Form.Group className="form-group">
								<Row>
									<Col md={6}>
										<FloatingLabel label="Clase de impuesto">
											<Form.Control
												name="taxClass"
												defaultValue={supplierData.TAX_CLASS_DESC}
												disabled
											/>
										</FloatingLabel>
									</Col>
									<Col md={6}>
										<FloatingLabel label="Número de cuenta bancaria">
											<Form.Control
												name="bankAccount"
												defaultValue={supplierData.BANK_ACCOUNT}
												disabled
											/>
										</FloatingLabel>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group className="form-group">
								<FloatingLabel label="Condición de pago">
									<Form.Control
										name="paymentCondition"
										defaultValue={supplierData.PAYMENT_CONDITION_DESC}
										disabled
									/>
								</FloatingLabel>
							</Form.Group> */}
						</Col>
					</Row>
					{/* <Row>
						<Col>
							<h4>Impuestos de contabilidad</h4>
							{supplierData.ACCOUNTING_TAXES.length ? (
								<Table>
									<thead>
										<tr>
											<th>Tipo de retención</th>
											<th>Indicador de retención</th>
										</tr>
									</thead>
									<tbody>
										{supplierData.ACCOUNTING_TAXES.map((row, index) => (
											<tr key={index}>
												<td>{row.RETENTION_TYPE_DESC}</td>
												<td>{row.RETENTION_INDICATOR_DESC}</td>
											</tr>
										))}
									</tbody>
								</Table>
							) : (
								<Alert>no hay información para mostrar</Alert>
							)}
						</Col>
					</Row> */}
				</>
			)}
			{/* <Row className="message">
				<Col>
					<Card>
						<Card.Body>
							<p>
								En caso de requerir modificar algún dato de esta información, por favor comunicarse
								con el área de contabilidad a través del correo electrónico{" "}
								<a href="mailto:contabilidad@grupodecor.com">contabilidad@grupodecor.com</a>{" "}
								indicando los cambios en la información requerida
							</p>
						</Card.Body>
					</Card>
				</Col>
			</Row> */}
		</div>
	);
};

export default ProfilePage;
