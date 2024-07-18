export const menuData2 = [
	{
		title: "Perfil",
		target: "profile",
		icon: "",
	},
	{
		title: "Gestión de mantenimiento",
		target: "/maintenance-management",
		icon: "fa-solid fa-user",
		subItems: [
			{
				title: "Avisos",
				target: "avisos",
				icon: "",
				subItems: [
					{
						title: "Crear nuevo aviso",
						target: "create-aviso",
						icon: "",
					},
					{
						title: "Lista de avisos",
						target: "read-avisos",
						icon: "",
					},
					{
						title: "Detalle de aviso",
						target: "read-aviso",
						icon: "",
					},
				],
			},
			{
				title: "Ordenes de Mantenimiento",
				target: "/maintenance-order",
				icon: "",
				subItems: [
					{
						title: "Crear nueva orden de mantenimiento",
						target: "/create-maintenance-order",
						icon: "",
					},
					{
						title: "Lista de órdenes de mantenimiento",
						target: "/read-maintenance-orders",
						icon: "",
					},
					{
						title: "Detalle de orden de mantenimiento",
						target: "/read-maintenance-order",
						icon: "",
						subItems: [
							{
								title: "Lista de materiales",
								target: "/read-materials",
								icon: "",
							},
							{
								title: "Solicitud de retiro de material",
								target: "/remove-material",
								icon: "",
							},
							{
								title: "Historial",
								target: "/history",
								icon: "",
							},
							{
								title: "Mostrar materiales no utilizados para realizar devolución",
								target: "/read-unused-materials",
								icon: "",
							},
							{
								title: "Lista de actividades",
								target: "/read-activities",
								icon: "",
							},
							{
								title: "Lista Hojas de rutas",
								target: "/read-hojas-rutas",
								icon: "",
							},
							{
								title: "Anexos",
								target: "/attachments",
								icon: "",
							},
							{
								title: "Firmas",
								target: "/signatures",
								icon: "",
							},
						],
					},
				],
			},
		],
	},

	{
		title: "Administración de equipos",
		target: "",
		icon: "",
		subItems: [
			{
				title: "Lista de equipos",
				target: "",
				icon: "",
			},
			{
				title: "Nuevo equipo",
				target: "",
				icon: "",
			},
			{
				title: "Configuración de limitación",
				target: "",
				icon: "",
			},
			{
				title: "Detalle de equipo",
				target: "",
				icon: "",
				subItems: [
					{
						title: "Administración de actividades",
						target: "",
						icon: "",
					},
					{
						title: "Inventario de materiales",
						target: "",
						icon: "",
					},
				],
			},
		],
	},

	{
		title: "Administración de suertes",
		target: "",
		icon: "",
		subItems: [
			{
				title: "Lista de suertes",
				target: "",
				icon: "",
			},
			{
				title: "Nueva suerte",
				target: "",
				icon: "",
			},
			{
				title: "Detalle de suerte",
				target: "",
				icon: "",
			},
		],
	},

	{
		title: "Traslado de materiales",
		target: "",
		icon: "",
		subItems: [
			{
				title: "Solicitud de movimiento de materiales",
				target: "",
				icon: "",
			},
			{
				title: "Lista de Traslado de almacenes",
				target: "",
				icon: "",
			},
			{
				title: "Detalle de materiales a trasladar",
				target: "",
				icon: "",
			},
			{
				title: "Detalle",
				target: "",
				icon: "",
			},
			{
				title: "Nueva solicitud de traslado",
				target: "",
				icon: "",
			},
		],
	},
	{
		title: "Maestro de materiales",
		target: "",
		icon: "",
		subItems: [
			{
				title: "Detalle material",
				target: "",
				icon: "",
				subItems: [
					{
						title: "Consulta de anexos y enlaces de documentación",
						target: "",
						icon: "",
					},
					{
						title: "Stock",
						target: "",
						icon: "",
					},
					{
						title: "Configuración de permanencias",
						target: "",
						icon: "",
					},
				],
			},
		],
	},

	{
		title: "Reportes y monitoreo",
		target: "",
		icon: "",
		subItems: [
			{
				title: "Historial de actividades",
				target: "",
				icon: "",
			},
		],
	},

	{
		title: "Configuración",
		target: "",
		icon: "",
		subItems: [
			{
				title: "Gestión de roles y perfiles",
				target: "",
				icon: "",
			},
			{
				title: "Offline",
				target: "",
				icon: "",
				subItems: [
					{
						title: "Lista de objetos a sincronizar",
						target: "",
						icon: "",
					},
				],
			},
		],
	},

	{
		title: "Cerrar sesión",
		target: "/login",
		icon: "fa-solid fa-right-from-bracket",
	},
];

export const menuData = [
	{
		title: "Test",
		icon: "fa-solid fa-star",
		target: "/",
		subitems: [
			{
				title: "Suertes",
				target: "/fields",
				icon: "fa-solid fa-cow",
			},
			{
				title: "Actividades de mantenimiento",
				target: "/maintenance-activities",
				icon: "fa-solid fa-paint-roller",
			},
		],
	},
	{
		title: "Suertes",
		target: "/fields",
		icon: "fa-solid fa-cow",
	},
	{
		title: "Actividades de mantenimiento",
		target: "/maintenance-activities",
		icon: "fa-solid fa-paint-roller",
	},
	{
		title: "Aprobaciones",
		target: "/activities-approval",
		icon: "fa-solid fa-check",
	},
	// {
	//   title: "Certificados",
	//   target: "/certificates",
	//   icon: "fa-solid fa-paint-roller"
	// },
	{
		title: "Maestro de materiales",
		target: "/MasterMaterials",
		icon: "fa-solid fa-truck",
	},
	{
		title: "Traslado de materiales",
		target: "/transfer-postings",
		icon: "fa-solid fa-dolly"
	},
	{
		title: "Reportes y Monitor",
		target: "/monitor",
		icon: "fa-solid fa-chart-line",
	},
	{
		title: "Configuración",
		target: "/configuration",
		icon: "fa-solid fa-gear",
	},
	// {
	//   title: "Documento equivalente",
	//   target: "/equivalent-document",
	//   icon: "fa-sharp fa-solid fa-file-invoice"
	// },
	{
		title: "Cerrar sesión",
		target: "/login",
		icon: "fa-solid fa-right-from-bracket",
	}
];
