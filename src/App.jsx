import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HabeasDataNotification from "./components/HabeasDataNotification";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import { menuData } from "./menu.data";
import { Menu } from "./components/Menu";

import "./App.scss";
import { RioHeader } from "./components/RioHeader";

const App = () => {
	const [supplierData, setSupplierData] = useState(
		sessionStorage.getItem("supplierData")
			? JSON.parse(sessionStorage.getItem("supplierData"))
			: null
	);

	return (
		<BrowserRouter>
			<HabeasDataNotification />
			<RioHeader supplierData={supplierData} setSupplierData={setSupplierData} menuData={menuData} />
			<Menu menuItems={menuData}></Menu>
			<main className="main">
				<Container fluid>
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/profile" element={<ProfilePage />} />
						<Route
							path="/register"
							element={
								<RegisterPage supplierData={supplierData} setSupplierData={setSupplierData} />
							}
						/>
					</Routes>
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
