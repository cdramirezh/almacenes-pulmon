import { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { menuData2 } from "../data/menu.data";
import "./styles/Menu.scss";
import "./styles/HomeMenu.scss";
import MultilevelMenu from "./MultilevelMenu";

const MenuItem = ({ item, setNavbarExpand }) => {
	const hasSubItems = !!item.subItems;

	return hasSubItems ? (
		<>
			<Accordion.Header>
				{!!item.icon && <i className={item.icon} />}
				<Link to={item.target} onClick={() => setNavbarExpand && setNavbarExpand(false)}>
					{item.title}
				</Link>
			</Accordion.Header>
			{!!hasSubItems && (
				<Accordion.Body>
					<Menu menuItems={item.subItems} setNavbarExpand={setNavbarExpand} />
				</Accordion.Body>
			)}
		</>
	) : (
		<div className="accordion-leaf">
			{!!item.icon && <i className={item.icon} />}
			<Link to={item.target} onClick={e => { setNavbarExpand && setNavbarExpand(false)}}>
				{item.title}
			</Link>
		</div>
	);
};

export const Menu = ({ menuItems, setNavbarExpand }) => {
	return (
		<Accordion defaultActiveKey="0">
			{menuItems.map((item, i) => {
				return (
					<Accordion.Item eventKey={i} key={i}>
						<MenuItem item={item} setNavbarExpand={setNavbarExpand}></MenuItem>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
};

export const OffcanvasMenu = () => {
	const [navbarExpanded, setNavbarExpand] = useState(false);
	return (
		<>
			<Navbar expand={false}>
				<Navbar.Toggle
					aria-controls={`offcanvasNavbar-expand-false`}
					onClick={() => setNavbarExpand(!navbarExpanded)}
				/>
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-false`}
					aria-labelledby={`offcanvasNavbarLabel-expand-false`}
					placement="end"
					show={navbarExpanded}
					onHide={() => setNavbarExpand(false)}
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>Menu</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body className="menu-container">
						{/* <Menu menuItems={menuData2} setNavbarExpand={setNavbarExpand} /> */}
						<MultilevelMenu data={menuData2} setNavbarExpand={setNavbarExpand} />
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Navbar>
		</>
	);
};

export const HomeMenu = () => {
	return (
		<div className="menu-container home-menu">
			{/* <Menu menuItems={menuData2} /> */}
			<MultilevelMenu data={menuData2} />
		</div>
	);
};
