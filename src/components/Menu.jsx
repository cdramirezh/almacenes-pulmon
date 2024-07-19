import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { menuData2 } from "../data/menu.data";
import "./styles/Menu.scss";

const MenuItem = ({ item }) => {
	const hasSubItems = !!item.subItems;

	return hasSubItems ? (
		<>
			<Accordion.Header>
				{!!item.icon && <i className={item.icon} />}
				<Link to={item.target}>{item.title}</Link>
			</Accordion.Header>
			{!!hasSubItems && (
				<Accordion.Body>
					<Menu menuItems={item.subItems} />
				</Accordion.Body>
			)}
		</>
	) : (
		<div className="accordion-leaf">
			{!!item.icon && <i className={item.icon} />}
			<Link to={item.target}>{item.title}</Link>
		</div>
	);
};

export const Menu = ({ menuItems }) => {
	return (
		<Accordion defaultActiveKey="0">
			{menuItems.map((item, i) => {
				return (
					<Accordion.Item eventKey={i} key={i}>
						<MenuItem item={item}></MenuItem>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
};

export const OffcanvasMenu = () => {
	return (
		<>
			<Navbar expand={false}>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-false`}
					aria-labelledby={`offcanvasNavbarLabel-expand-false`}
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>Menu</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body className="menu-container">
						<Menu menuItems={menuData2} className="menu-con-mas-especificidad" />
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Navbar>
		</>
	);
};
