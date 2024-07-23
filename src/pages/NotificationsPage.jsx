import { Link } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import { notifications } from "../notifications.data";
import "./styles/NotificationsPage.scss";

export const Notification = ({ notification }) => (
	<Link to={notification.link}>
		<Toast bg={notification.read ? "primary" : "light"}>
			<Toast.Header closeButton={false}>
				<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
				<strong className="me-auto">{notification.title}{!notification.read && " (Leída)"}</strong>
				<small>{notification.time}</small>
			</Toast.Header>
			<Toast.Body>{notification.body}</Toast.Body>
		</Toast>
	</Link>
);

export const NotificationsPage = () => {
	return (
		<div className="notifications-page">
			{notifications.map((notification, idx) => (
				<Notification notification={notification} key={idx} />
			))}
		</div>
	);
};
