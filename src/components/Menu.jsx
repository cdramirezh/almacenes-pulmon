import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles/Menu.scss";

const MenuItem = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(prev => !prev);
	const hasSubItems = !!item.subItems;

	return (
		<NavDropdown.Item as="div">
			<div>
				{!!hasSubItems && <span onClick={toggleMenu}>{isOpen ? "⬆️" : "🔽"}</span>}
				<i className={item.icon} />
				<Link to={item.target}>{item.title}</Link>
			</div>
			{!!hasSubItems && !!isOpen && <Menu menuItems={item.subItems} />}
		</NavDropdown.Item>
	);
};

export const Menu = ({ menuItems }) => {
	return (
		<NavDropdown>
			{menuItems.map(item => {
				return <MenuItem key={Math.random()} item={item} />;
			})}
		</NavDropdown>
	);
};
