import Toast from "react-bootstrap/Toast";
import { notifications } from "../notifications.data";
// import ""

export const Notification = ({ notification }) => (
	<Toast bg={notification.read ? "primary" : "light"}>
		<Toast.Header closeButton={false}>
			<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
			<strong className="me-auto">{notification.title}</strong>
			<small>{notification.time}</small>
		</Toast.Header>
		<Toast.Body>{notification.body}</Toast.Body>
	</Toast>
);

export const NotificationsPage = () => {
	return (
		<div className="notifications-page d-flex flex-column align-items-center">
			{notifications.map((notification, idx) => (
				<Notification notification={notification} key={idx} />
			))}
		</div>
	);
};
