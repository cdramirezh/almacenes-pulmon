import { useState } from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(prev => !prev);
	const hasSubItems = !!item.subItems;

	return (
		<>
			<div>
				{!!hasSubItems && <span onClick={toggleMenu}>{isOpen ? "⬆️" : "🔽"}</span>}
				<i className={item.icon} />
				<Link to={item.target}>{item.title}</Link>
			</div>
			{!!hasSubItems && !!isOpen && <Menu menuItems={item.subItems} />}
		</>
	);
};

export const Menu = ({ menuItems }) => {
	return (
		<>
			{menuItems.map(item => {
				return <MenuItem key={Math.random()} item={item} />;
			})}
		</>
	);
};
