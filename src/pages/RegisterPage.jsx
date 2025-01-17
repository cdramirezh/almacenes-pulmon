import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import FormCenterContainer from "../components/FormCenterContainer";
import MyButton from "../components/MyButton";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getSupplierData } from "../actions/supplierActions";
import {
	checkUserExist,
	getUserFromHexCode,
	registerBeforeConfirmationEmail,
	registerUser,
} from "../actions/userActions";
import { login } from "../actions/userActions";

import "./styles/RegisterPage.scss";

const RegisterPage = ({ supplierData, setSupplierData }) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const validationCode = searchParams.get("code");

	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const [idType, setIdType] = useState("");
	const [idNumber, setIdNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [name, setName] = useState("");
	const [supplierId, setSupplierId] = useState("");

	const $form = useRef(null);

	useEffect(() => {
		if (supplierData) {
			navigate("/profile");
		} else if (validationCode) {
			(async () => {
				const username = await getUserFromHexCode({ validationCode });
				const id_number = username.slice(5);
				const id_type = username.slice(3, 5);
				setIdNumber(id_number);
				setIdType(id_type);
				getSupplierData(id_type, id_number)
					.then(({ BUSINESS_NAME, SUPPLIER_ID }) => {
						setName(BUSINESS_NAME);
						setSupplierId(SUPPLIER_ID);
						setPage(2);
					})
					.catch(error => {
						setMessage(error.toString());
					});
			})();
		}
	});

	const isOk1 = () => {
		let ok = true;

		$form.current.idType.classList.remove("is-invalid");
		$form.current.idNumber.classList.remove("is-invalid");

		// Tipo de identificación
		if ($form.current.idType.value === "") {
			ok = false;
			$form.current.idType.classList.add("is-invalid");
		}

		// Número de identificación
		if ($form.current.idNumber.value === "") {
			ok = false;
			$form.current.idNumber.classList.add("is-invalid");
		}

		return ok;
	};

	const isOk = () => {
		let ok = true;

		$form.current.idType.classList.remove("is-invalid");
		$form.current.idNumber.classList.remove("is-invalid");
		$form.current.password.classList.remove("is-invalid");
		$form.current.confirmPassword.classList.remove("is-invalid");

		// Tipo de identificación
		if ($form.current.idType.value === "") {
			ok = false;
			$form.current.idType.classList.add("is-invalid");
		}

		// Número de identificación
		if ($form.current.idNumber.value === "") {
			ok = false;
			$form.current.idNumber.classList.add("is-invalid");
		}

		// Contraseña
		if ($form.current.password.value === "") {
			ok = false;
			$form.current.password.classList.add("is-invalid");
		}

		// Confirmar contraseña
		if ($form.current.password.value !== $form.current.confirmPassword.value) {
			ok = false;
			$form.current.confirmPassword.classList.add("is-invalid");
		}

		return ok;
	};

	const handleSubmit = async e => {
		e.preventDefault();

		setMessage("");
		setLoading(true);

		if (page === 1) {
			try {
				if (!isOk1()) return;

				const supplierData = await getSupplierData(idType, idNumber);

				if (!supplierData) {
					setMessage("No se encontraron datos con la información ingresada");
					return;
				}

				const user = `ESP${idType}${idNumber}`; // ESP - Ecommerce Suppliers Portal
				const userExists = await checkUserExist(user);
				if (userExists) {
					setMessage("Usuario ya existe.");
					return;
				}

				const { recipientEmail } = await registerBeforeConfirmationEmail(
					idType,
					idNumber,
					supplierData.SUPPLIER_ID
				);
				setMessage(`Se ha enviado un correo a ${recipientEmail} para continuar con el registro`);
			} catch (error) {
				setMessage(error);
			} finally {
				setLoading(false);
			}
		} else {
			if (isOk()) {
				registerUser(idType, idNumber, password, supplierId, name)
					.then(() => {
						login(idType, idNumber, password)
							.then(res => setSupplierData(res))
							.catch(error => {
								setLoading(false);
								setMessage(error);
							});
					})
					.catch(error => {
						setMessage(error);
						setLoading(false);
					});
			}
		}
	};

	return (
		<Row className="register-page">
			<Col>
				{loading ? (
					<Loader />
				) : (
					<FormCenterContainer>
						<h1 className="text-center mb-5">Portal de Proveedores</h1>
						{message === "Usuario ya existe." ? (
							<Message variant="danger">
								{message} <Link to="/login">Iniciar sesión</Link>
							</Message>
						) : (
							message && <Message variant="danger">{message}</Message>
						)}
						<Form onSubmit={e => handleSubmit(e)} ref={$form}>
							{page === 1 ? (
								<>
									<Form.Group>
										<FloatingLabel label="Tipo de identificación">
											<Form.Select
												name="idType"
												onChange={e => setIdType(e.target.value)}
												value={idType}
												autoFocus
											>
												<option value="">Seleccione un tipo de identificación</option>
												<option value="13">Cédula de ciudadanía</option>
												<option value="22">Cédula de extranjería</option>
												<option value="31">NIT (Con dígito de verificación)</option>
												<option value="41">Pasaporte</option>
											</Form.Select>
											<div className="invalid-feedback">Indique tipo de identificación</div>
										</FloatingLabel>
									</Form.Group>
									<Form.Group>
										<FloatingLabel label="Número de identificación">
											<Form.Control
												type="number"
												name="idNumber"
												placeholder="Ingresar número de identificación"
												onChange={e => setIdNumber(e.target.value)}
												value={idNumber}
											/>
											<div className="invalid-feedback">Número de identificación inválido</div>
										</FloatingLabel>
									</Form.Group>
								</>
							) : (
								<>
									<Form.Group>
										<FloatingLabel label="Nombre">
											<Form.Control type="text" value={name} disabled />
										</FloatingLabel>
									</Form.Group>
									<Form.Group>
										<FloatingLabel label="Tipo de identificación">
											<Form.Select name="idType" value={idType} disabled>
												<option value="">Seleccione un tipo de identificación</option>
												<option value="13">Cédula de ciudadanía</option>
												<option value="22">Cédula de extranjería</option>
												<option value="31">NIT</option>
												<option value="41">Pasaporte</option>
											</Form.Select>
											<div className="invalid-feedback">Indique tipo de identificación</div>
										</FloatingLabel>
									</Form.Group>
									<Form.Group>
										<FloatingLabel label="Número de identificación">
											<Form.Control
												type="number"
												name="idNumber"
												placeholder="Ingresar número de identificación"
												value={idNumber}
												disabled
											/>
											<div className="invalid-feedback">Número de identificación inválido</div>
										</FloatingLabel>
									</Form.Group>
									<Form.Group>
										<FloatingLabel label="Contraseña">
											<Form.Control
												type="password"
												name="password"
												placeholder="Ingresar contraseña"
												onChange={e => setPassword(e.target.value)}
												value={password}
											/>
											<div className="invalid-feedback">Indique contraseña</div>
										</FloatingLabel>
									</Form.Group>
									<Form.Group>
										<FloatingLabel label="Confirmar contraseña">
											<Form.Control
												type="password"
												name="confirmPassword"
												placeholder="Confirmar contraseña"
												onChange={e => setConfirmPassword(e.target.value)}
												value={confirmPassword}
											/>
											<div className="invalid-feedback">Las contraseñas no coinciden</div>
										</FloatingLabel>
									</Form.Group>
								</>
							)}
							<Form.Group className="d-grid mt-3">
								<MyButton type="submit">{page === 1 ? "Siguiente" : "Confirmar datos"}</MyButton>
							</Form.Group>
						</Form>
						<Row className="mt-3">
							<Col>
								¿Ya tiene una cuenta? <Link to="/login">Iniciar sesión</Link>
							</Col>
						</Row>
					</FormCenterContainer>
				)}
			</Col>
		</Row>
	);
};

export default RegisterPage;
