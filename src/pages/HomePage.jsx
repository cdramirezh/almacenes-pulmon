import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import "./styles/HomePage.scss";

const HomePage = ({ setSupplierData, menuData }) => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/") navigate("/home");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="home-page">
			<Outlet />
		</div>
	);
};

export default HomePage;
