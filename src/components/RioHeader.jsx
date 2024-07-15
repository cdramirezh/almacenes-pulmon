import "./styles/RioHeader.scss"

export const RioHeader = () => (
	<header>
		<div>
			<i className="fa fa-bars"></i>
			{/* <i className="fa fa-arrow-left"></i> */}
		</div>
		<div>
			{/* <i className="fa fa-home"></i> */}
			{/* <i className="fa-solid fa-filter"></i> */}
			{/* <i className="fa fa-user-group"></i> */}
			{/* <i className="fa fa-envelope"></i> */}
			<i className="fa fa-bell"></i>
		</div>
		<img
			src="https://www.riopaila-castilla.com/wp-content/uploads/2021/11/roseta-pequena.png"
			alt="logo"
		/>
	</header>
);