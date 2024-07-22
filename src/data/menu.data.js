export const menuData2 = [
	{
		title: "Dashboard",
		target: "/home",
		icon: "fa-solid fa-house",
	},
	{
		title: "Perfil",
		target: "profile",
		icon: "fa-solid fa-user",
	},
	{
		title: "Mantenimiento",
		target: "maintenance-activities",
		icon: "fa-solid fa-screwdriver-wrench",
		subItems: [
			{
				title: "Actividades mantenimiento",
				target: "maintenance-activities",
				icon: "",
			},
			{
				title: "Aprobación actividades",
				target: "/activities-approval",
				icon: "",
			},
		],
	},
	{
		title: "Equipos",
		target: "/equipments",
		icon: "fa-solid fa-tractor",
	},

	{
		title: "Suertes",
		target: "/fields",
		icon: "fa-solid fa-wheat-awn",
	},

	{
		title: "Traslado de materiales",
		target: "/transfer-postings",
		icon: "fa-solid fa-dolly",
	},
	{
		title: "Maestro de materiales",
		target: "/master-materials",
		icon: "fa-solid fa-toolbox",
	},

	{
		title: "Reportes y monitoreo",
		target: "/monitor",
		icon: "fa-solid fa-chart-line",
	},

	{
		title: "Configuración",
		target: "/configuration",
		icon: "fa-solid fa-gear",
		subItems: [
			{
				title: "Gestión de roles y perfiles",
				target: "/configuration-profiles",
				icon: "",
			},
			{
				title: "Offline",
				target: "configurationSync",
				icon: "",
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
		target: "/home",
		subItems: [
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
		target: "/master-materials",
		icon: "fa-solid fa-truck",
	},
	{
		title: "Traslado de materiales",
		target: "/transfer-postings",
		icon: "fa-solid fa-dolly",
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
	},
];
