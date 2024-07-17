import Toast from "react-bootstrap/Toast";
import { notifications } from "./notifications.data";

export const NotificationsPage = () => {
	return (
		<div className="notifications-page d-flex flex-column align-items-center">
			{notifications.map((notification, idx) => {
				return (
					<Toast bg={notification.read ? "primary" : "light"} key={idx}>
						<Toast.Header closeButton={false}>
							<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
							<strong className="me-auto">{notification.title}</strong>
							<small>{notification.time}</small>
						</Toast.Header>
						<Toast.Body>{notification.body}</Toast.Body>
					</Toast>
				);
			})}
		</div>
	);
};
