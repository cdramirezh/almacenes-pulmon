import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import HabeasDataNotification from './components/HabeasDataNotification';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PendingInvoicesPage from './pages/PendingInvoicesPage';
import PaymentsPage from './pages/PaymentsPage';
import CertificatesPage from './pages/CertificatesPage';
import EquipmentsPage from './pages/EquipmentsPage';
import EquipmentDetailsPage from './pages/EquipmentDetailsPage';
import FieldsPage from './pages/FieldsPage';
import FieldDetailsPage from './pages/FieldDetailsPage';
// import EquivalentDocumentPage from './pages/EquivalentDocumentPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import NotFoundPage from './pages/NotFoundPage';
import { HelmetProvider } from 'react-helmet-async';

import './App.scss'

const App = () => {

  // const [supplierData, setSupplierData] = useState(sessionStorage.getItem('supplierData') ? JSON.parse(sessionStorage.getItem('supplierData')) : null)
  const [supplierData, setSupplierData] = useState(JSON.stringify({
    BUSINESS_NAME: "Ricardo Pérez"
  }))

  const menuData = [
    {
      title: "Mis datos",
      target: "/profile",
      icon: "fa-solid fa-user"
    },
    {
      title: "Estado de cuenta",
      target: "/pending-invoices",
      icon: "fa-solid fa-receipt"
    },
    {
      title: "Pagos",
      target: "/payments",
      icon: "fa-solid fa-money-bill"
    },
    {
      title: "Certificados",
      target: "/certificates",
      icon: "fa-solid fa-file"
    },
    // {
    //   title: "Documento equivalente",
    //   target: "/equivalent-document",
    //   icon: "fa-sharp fa-solid fa-file-invoice"
    // },
    {
      title: "Cerrar sesión",
      target: "/login",
      icon: "fa-solid fa-right-from-bracket"
    }
  ]

    const equipments = [
        {
            id: 60641471,
            type: 'Integral',
            brand: 'John Deere',
            model: 'CH570',
            serial: crypto.randomUUID(),
            image: "https://www.deere.com/assets/images/region-3/products/harvesters/sugar-cane-harvester/cosechadora_cana_CH570_campo_1_large_889683089cc000fe5fe1af759223bf5749064424.jpg",
            technicalsDetails: [
                {
                    segment: "Motor",
                    characteristics: [
                        {
                            name: "Tipo de motor",
                            value: "Diésel"
                        },
                        {
                            name: "Potencia (HP)",
                            value: 375
                        },
                        {
                            name: "Capacidad del tanque (litros)",
                            value: 710
                        }, {
                            name: "Consumo de combustible (L/h)",
                            value: "80-100"
                        }
                    ]
                },
                {
                    segment: "Sistema de corte",
                    characteristics: [
                        {
                            name: "Tipo de cabezal de corte",
                            value: "Rotativo",
                        },
                        {
                            name: "Ancho de corte (metros)",
                            value: "1.5",
                        },
                        {
                            name: "Altura ajustable de corte (m)",
                            value: "0.15-1.2",
                        }
                    ]
                },
                {
                    segment: "Capacidad de recolección",
                    characteristics: [
                        {
                            name: "Capacidad de la tolva (m³)",
                            value: "8.0"
                        },
                        {
                            name: "Sistema de descarga",
                            value: "Lateral"
                        },
                        {
                            name: "Velocidad de descarga (ton/min)",
                            value: "2.5"
                        }
                    ]
                },
                {
                    segment: "Sistema de limpieza",
                    characteristics: [
                        {
                            name: "Tipo de sistema de limpieza",
                            value: "Ventiladores",
                        },
                        {
                            name: "Eficiencia de limpieza (%)",
                            value: "95",
                        }
                    ]
                },
                {
                    segment: "Transmisión y tracción",
                    characteristics: [
                        {
                            name: "Tipo de transmisión",
                            value: "Hidrostática",
                        },
                        {
                            name: "Tipo de tracción",
                            value: "4WD",
                        },
                        {
                            name: "Velocidad máxima (km/h)",
                            value: "20",
                        }
                    ]
                },
                {
                    segment: "Dimensiones y peso",
                    characteristics: [
                        {
                            name: "Longitud total (m)",
                            value: "11.0"
                        },
                        {
                            name: "Ancho total (m)",
                            value: "2.4"
                        },
                        {
                            name: "Altura total (m)",
                            value: "4.0"
                        },
                        {
                            name: "Peso (toneladas)",
                            value: "16.5"
                        }
                    ]
                },
                {
                    segment: "Capacidad operativa",
                    characteristics: [
                        {
                            name: "Rendimiento de trabajo (ha/h)",
                            value: "1.0-1.2"
                        },
                        {
                            name: "Capacidad de almacenamiento (ton)",
                            value: "8.0"
                        },
                        {
                            name: "Sistema de carga y descarga",
                            value: "Automático"
                        }
                    ]
                },
            ],
            links: [
                {
                    name: "Página web del fabricante",
                    link: "https://www.deere.com/latin-america/es/"
                },
                {
                    name: "Ficha técnica",
                    link: "https://www.deere.com/latin-america/es/cosechadoras/cosechadora-de-ca%C3%B1a-de-az%C3%BAcar/ch570/"
                }
            ]
        },
        {
            id: 44395387,
            type: 'Autopropulsada',
            brand: 'Case IH',
            model: 'Austoft 8800',
            serial: crypto.randomUUID(),
            image: "data:image/jpeg;base64,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",
            technicalsDetails: [
                {
                    segment: "Motor",
                    characteristics: [
                        {
                            name: "Tipo de motor",
                            value: "Diésel"
                        },
                        {
                            name: "Potencia (HP)",
                            value: 358
                        },
                        {
                            name: "Capacidad del tanque (litros)",
                            value: 600
                        }, {
                            name: "Consumo de combustible (L/h)",
                            value: "75-95"
                        }
                    ]
                },
                {
                    segment: "Sistema de corte",
                    characteristics: [
                        {
                            name: "Tipo de cabezal de corte",
                            value: "Rotativo",
                        },
                        {
                            name: "Ancho de corte (metros)",
                            value: "1.65",
                        },
                        {
                            name: "Altura ajustable de corte (m)",
                            value: "0.2-1.4",
                        }
                    ]
                },
                {
                    segment: "Capacidad de recolección",
                    characteristics: [
                        {
                            name: "Capacidad de la tolva (m³)",
                            value: "8.5"
                        },
                        {
                            name: "Sistema de descarga",
                            value: "Lateral"
                        },
                        {
                            name: "Velocidad de descarga (ton/min)",
                            value: "2.7"
                        }
                    ]
                },
                {
                    segment: "Sistema de limpieza",
                    characteristics: [
                        {
                            name: "Tipo de sistema de limpieza",
                            value: "Ventiladores",
                        },
                        {
                            name: "Eficiencia de limpieza (%)",
                            value: "96",
                        }
                    ]
                },
                {
                    segment: "Transmisión y tracción",
                    characteristics: [
                        {
                            name: "Tipo de transmisión",
                            value: "Hidrostática",
                        },
                        {
                            name: "Tipo de tracción",
                            value: "4WD",
                        },
                        {
                            name: "Velocidad máxima (km/h)",
                            value: "18",
                        }
                    ]
                },
                {
                    segment: "Dimensiones y peso",
                    characteristics: [
                        {
                            name: "Longitud total (m)",
                            value: "10.8"
                        },
                        {
                            name: "Ancho total (m)",
                            value: "2.5"
                        },
                        {
                            name: "Altura total (m)",
                            value: "3.9"
                        },
                        {
                            name: "Peso (toneladas)",
                            value: "16.0"
                        }
                    ]
                },
                {
                    segment: "Capacidad operativa",
                    characteristics: [
                        {
                            name: "Rendimiento de trabajo (ha/h)",
                            value: "1.1-1.3"
                        },
                        {
                            name: "Capacidad de almacenamiento (ton)",
                            value: "8.5"
                        },
                        {
                            name: "Sistema de carga y descarga",
                            value: "Automático"
                        }
                    ]
                },
            ],
            links: [
                {
                    name: "Página web del fabricante",
                    link: "https://www.caseih.com/latam/es-latam/home"
                },
                {
                    name: "Ficha técnica",
                    link: "https://assets.cnhindustrial.com/caseih/MEXICO/MEXICOASSETS/Brochures/2_Cosechadoras/12_Cosechadoras-de-Ca%C3%B1a-Austoft/Cosechadora-de-Ca%C3%B1a-Austoft-A8000-8800.pdf"
                }
            ]
        },
        {
            id: 64165817,
            type: 'Remolcada',
            brand: 'New Holland',
            model: '770H',
            serial: crypto.randomUUID(),
            image: "data:image/jpeg;base64,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",
            technicalsDetails: [
                {
                    segment: "Motor",
                    characteristics: [
                        {
                            name: "Tipo de motor",
                            value: "Diésel"
                        },
                        {
                            name: "Potencia (HP)",
                            value: 375
                        },
                        {
                            name: "Capacidad del tanque (litros)",
                            value: 700
                        }, {
                            name: "Consumo de combustible (L/h)",
                            value: "80-100"
                        }
                    ]
                },
                {
                    segment: "Sistema de corte",
                    characteristics: [
                        {
                            name: "Tipo de cabezal de corte",
                            value: "Rotativo",
                        },
                        {
                            name: "Ancho de corte (metros)",
                            value: "1.5",
                        },
                        {
                            name: "Altura ajustable de corte (m)",
                            value: "0.2-1.4",
                        }
                    ]
                },
                {
                    segment: "Capacidad de recolección",
                    characteristics: [
                        {
                            name: "Capacidad de la tolva (m³)",
                            value: "8.5"
                        },
                        {
                            name: "Sistema de descarga",
                            value: "Lateral"
                        },
                        {
                            name: "Velocidad de descarga (ton/min)",
                            value: "2.7"
                        }
                    ]
                },
                {
                    segment: "Sistema de limpieza",
                    characteristics: [
                        {
                            name: "Tipo de sistema de limpieza",
                            value: "Ventiladores",
                        },
                        {
                            name: "Eficiencia de limpieza (%)",
                            value: "96",
                        }
                    ]
                },
                {
                    segment: "Transmisión y tracción",
                    characteristics: [
                        {
                            name: "Tipo de transmisión",
                            value: "Hidrostática",
                        },
                        {
                            name: "Tipo de tracción",
                            value: "4WD",
                        },
                        {
                            name: "Velocidad máxima (km/h)",
                            value: "18",
                        }
                    ]
                },
                {
                    segment: "Dimensiones y peso",
                    characteristics: [
                        {
                            name: "Longitud total (m)",
                            value: "10.8"
                        },
                        {
                            name: "Ancho total (m)",
                            value: "2.5"
                        },
                        {
                            name: "Altura total (m)",
                            value: "3.9"
                        },
                        {
                            name: "Peso (toneladas)",
                            value: "16.0"
                        }
                    ]
                },
                {
                    segment: "Capacidad operativa",
                    characteristics: [
                        {
                            name: "Rendimiento de trabajo (ha/h)",
                            value: "1.1-1.3"
                        },
                        {
                            name: "Capacidad de almacenamiento (ton)",
                            value: "8.5"
                        },
                        {
                            name: "Sistema de carga y descarga",
                            value: "Automático"
                        }
                    ]
                },
            ],
            links: [
                {
                    name: "Página web del fabricante",
                    link: "https://agriculture.newholland.com/lar/es"
                },
                {
                    name: "Ficha técnica",
                    link: "https://www.lectura-specs.es/es/modelo/maquinaria-agricola/tractores-traccion-4-ruedas-new-holland/t-6-175-770-1149089"
                }
            ]
        },
        {
            id: 59815857,
            type: 'Corte en verde',
            brand: 'Challenger',
            model: '700B Series',
            serial: crypto.randomUUID(),
            image: "data:image/jpeg;base64,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",
            technicalsDetails: [
                {
                    segment: "Motor",
                    characteristics: [
                        {
                            name: "Tipo de motor",
                            value: "Diésel"
                        },
                        {
                            name: "Potencia (HP)",
                            value: 375
                        },
                        {
                            name: "Capacidad del tanque (litros)",
                            value: 700
                        }, {
                            name: "Consumo de combustible (L/h)",
                            value: "80-100"
                        }
                    ]
                },
                {
                    segment: "Sistema de corte",
                    characteristics: [
                        {
                            name: "Tipo de cabezal de corte",
                            value: "Rotativo",
                        },
                        {
                            name: "Ancho de corte (metros)",
                            value: "1.5",
                        },
                        {
                            name: "Altura ajustable de corte (m)",
                            value: "0.2-1.4",
                        }
                    ]
                },
                {
                    segment: "Capacidad de recolección",
                    characteristics: [
                        {
                            name: "Capacidad de la tolva (m³)",
                            value: "8.5"
                        },
                        {
                            name: "Sistema de descarga",
                            value: "Lateral"
                        },
                        {
                            name: "Velocidad de descarga (ton/min)",
                            value: "2.7"
                        }
                    ]
                },
                {
                    segment: "Sistema de limpieza",
                    characteristics: [
                        {
                            name: "Tipo de sistema de limpieza",
                            value: "Ventiladores",
                        },
                        {
                            name: "Eficiencia de limpieza (%)",
                            value: "96",
                        }
                    ]
                },
                {
                    segment: "Transmisión y tracción",
                    characteristics: [
                        {
                            name: "Tipo de transmisión",
                            value: "Hidrostática",
                        },
                        {
                            name: "Tipo de tracción",
                            value: "4WD",
                        },
                        {
                            name: "Velocidad máxima (km/h)",
                            value: "18",
                        }
                    ]
                },
                {
                    segment: "Dimensiones y peso",
                    characteristics: [
                        {
                            name: "Longitud total (m)",
                            value: "10.8"
                        },
                        {
                            name: "Ancho total (m)",
                            value: "2.5"
                        },
                        {
                            name: "Altura total (m)",
                            value: "3.9"
                        },
                        {
                            name: "Peso (toneladas)",
                            value: "16.0"
                        }
                    ]
                },
                {
                    segment: "Capacidad operativa",
                    characteristics: [
                        {
                            name: "Rendimiento de trabajo (ha/h)",
                            value: "1.1-1.3"
                        },
                        {
                            name: "Capacidad de almacenamiento (ton)",
                            value: "8.5"
                        },
                        {
                            name: "Sistema de carga y descarga",
                            value: "Automático"
                        }
                    ]
                },
            ],
            links: [
                {
                    name: "Página web del fabricante",
                    link: "https://www.agcocorp.com/brands/challenger.html"
                },
                {
                    name: "Ficha técnica",
                    link: "https://simonassi.com.ar/www.simonassi.com.ar/new/ver_nota95d7.html?id=000006"
                }
            ]
        },
        {
            id: 61677570,
            type: 'Corte en seco',
            brand: 'Cameco',
            model: '2500 Series',
            serial: crypto.randomUUID(),
            image: "data:image/jpeg;base64,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",
            technicalsDetails: [
                {
                    segment: "Motor",
                    characteristics: [
                        {
                            name: "Tipo de motor",
                            value: "Diésel"
                        },
                        {
                            name: "Potencia (HP)",
                            value: 375
                        },
                        {
                            name: "Capacidad del tanque (litros)",
                            value: 700
                        }, {
                            name: "Consumo de combustible (L/h)",
                            value: "80-100"
                        }
                    ]
                },
                {
                    segment: "Sistema de corte",
                    characteristics: [
                        {
                            name: "Tipo de cabezal de corte",
                            value: "Rotativo",
                        },
                        {
                            name: "Ancho de corte (metros)",
                            value: "1.5",
                        },
                        {
                            name: "Altura ajustable de corte (m)",
                            value: "0.2-1.4",
                        }
                    ]
                },
                {
                    segment: "Capacidad de recolección",
                    characteristics: [
                        {
                            name: "Capacidad de la tolva (m³)",
                            value: "8.5"
                        },
                        {
                            name: "Sistema de descarga",
                            value: "Lateral"
                        },
                        {
                            name: "Velocidad de descarga (ton/min)",
                            value: "2.7"
                        }
                    ]
                },
                {
                    segment: "Sistema de limpieza",
                    characteristics: [
                        {
                            name: "Tipo de sistema de limpieza",
                            value: "Ventiladores",
                        },
                        {
                            name: "Eficiencia de limpieza (%)",
                            value: "96",
                        }
                    ]
                },
                {
                    segment: "Transmisión y tracción",
                    characteristics: [
                        {
                            name: "Tipo de transmisión",
                            value: "Hidrostática",
                        },
                        {
                            name: "Tipo de tracción",
                            value: "4WD",
                        },
                        {
                            name: "Velocidad máxima (km/h)",
                            value: "18",
                        }
                    ]
                },
                {
                    segment: "Dimensiones y peso",
                    characteristics: [
                        {
                            name: "Longitud total (m)",
                            value: "10.8"
                        },
                        {
                            name: "Ancho total (m)",
                            value: "2.5"
                        },
                        {
                            name: "Altura total (m)",
                            value: "3.9"
                        },
                        {
                            name: "Peso (toneladas)",
                            value: "16.0"
                        }
                    ]
                },
                {
                    segment: "Capacidad operativa",
                    characteristics: [
                        {
                            name: "Rendimiento de trabajo (ha/h)",
                            value: "1.1-1.3"
                        },
                        {
                            name: "Capacidad de almacenamiento (ton)",
                            value: "8.5"
                        },
                        {
                            name: "Sistema de carga y descarga",
                            value: "Automático"
                        }
                    ]
                },
            ],
            links: [
                {
                    name: "Página web del fabricante",
                    link: "https://www.cameco.com/"
                },
                {
                    name: "Ficha técnica",
                    link: "https://servicios.laica.co.cr/laica-cv-biblioteca/index.php/Library/download/nnQgTEtLsPtFrSljUNOJkNgDMEAAHKMP"
                }
            ]
        }
    ]

    const fields = [
        {
            id: 5378495,
            name: "Cultivo El Paraíso",
            size: 120,
            
            image: "https://www.invesa.com/wp-content/uploads/2020/10/Cana-de-azucar.jpg",
            location: {
                lat: 3.4542,
                lon: -76.5321
            },
            soil: "Franco-Arcilloso",
            caneVariety: "CC 85-92",
            irrigationSystem: "Riego por Goteo",
            seedtime: new Date("2021-03-15"),
            map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.569934957603!2d-76.53467492502749!3d3.454199996520254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjcnMTUuMSJOIDc2wrAzMSc1NS42Ilc!5e0!3m2!1ses!2sco!4v1720901989955!5m2!1ses!2sco"
        },
        {
            id: 58374956,
            name: "Cultivo La Esperanza",
            size: 90,
            image: "https://www.shutterstock.com/image-photo/sugarcane-field-full-grown-crop-600nw-2191190429.jpg",
            location: {
                lat: 3.4625,
                lon: -76.5204
            },
            soil: "Arcilloso",
            caneVariety: "CC 93-4418",
            irrigationSystem: "Riego por Aspersión",
            seedtime: new Date("2020-09-10"),
            map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.5350698388606!2d-76.52297492502743!3d3.462499996511935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjcnNDUuMCJOIDc2wrAzMScxMy40Ilc!5e0!3m2!1ses!2sco!4v1720902548439!5m2!1ses!2sco"
        },
        {
            id: 52537496,
            name: "Cultivo Las Flores",
            size: 110,
            image: "https://a.storyblok.com/f/160385/38ec5da4e7/cana-azucar.jpg/m/?w=256&q=100",
            location: {
                lat: 3.4710,
                lon: -76.5113
            },
            soil: "Arenoso",
            caneVariety: "V 71-51",
            irrigationSystem: "Riego por Gravedad",
            seedtime: new Date("2019-06-20"),
            map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.4992779779022!2d-76.51387492502742!3d3.47099999650341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjgnMTUuNiJOIDc2wrAzMCc0MC43Ilc!5e0!3m2!1ses!2sco!4v1720902579146!5m2!1ses!2sco"
        },
        {
            id: 54695673,
            name: "Cultivo San Joaquín",
            size: 150,
            image: "https://eos.com/wp-content/uploads/2022/11/high-plants-of-sugar-cane.jpg.webp",
            location: {
                lat: 3.4503,
                lon: -76.5402
            },
            soil: "Franco",
            caneVariety: "CC 01-1940",
            irrigationSystem: "Riego por Goteo",
            seedtime: new Date("2022-01-25"),
            map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.58628850176!2d-76.54277492502753!3d3.450299996524156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjcnMDEuMSJOIDc2wrAzMicyNC43Ilc!5e0!3m2!1ses!2sco!4v1720902600095!5m2!1ses!2sco"
        },
        {
            id: 51127498,
            name: "Cultivo Los Naranjos",
            size: 95,
            image: "https://procana.org/site/wp-content/uploads/2022/10/cana-cultivo.jpeg",
            location: {
                lat: 3.4678,
                lon: -76.5307
            },
            soil: "Limoso",
            caneVariety: "CC 93-3895",
            irrigationSystem: "Riego por Aspersión",
            seedtime: new Date("2021-05-30"),
            map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.5127628483096!2d-76.53327492502747!3d3.46779999650661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjgnMDQuMSJOIDc2wrAzMSc1MC41Ilc!5e0!3m2!1ses!2sco!4v1720902624773!5m2!1ses!2sco"
        },
        {
            id: 56847958,
            name: "Cultivo La Fortuna",
            size: 130,
            image: "https://agrotendencia.tv/wp-content/uploads/2019/04/imagen15.gif",
            location: {
                lat: 3.4596,
                lon: -76.5159
            },
            soil: "Arcilloso",
            caneVariety: "V 78-1",
            irrigationSystem: "Riego por Gravedad",
            seedtime: new Date("2020-11-18"),
            map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.5472611263353!2d-76.51847492502746!3d3.459599996514833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjcnMzQuNiJOIDc2wrAzMCc1Ny4yIlc!5e0!3m2!1ses!2sco!4v1720902648899!5m2!1ses!2sco"
        },
        {
            id: 56484557,
            name: "Cultivo Santa María",
            size: 100,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgqQ_q2675BMLjabon-69ntxF7tQ81GIJkJw&s",
            location: {
                lat: 3.4520,
                lon: -76.5264
            },
            soil: "Franco-Arcilloso",
            caneVariety: "CC 84-75",
            irrigationSystem: "Riego por Goteo",
            seedtime: new Date("2019-08-12"),
            map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.5791623024083!2d-76.52897492502751!3d3.451999996522454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjcnMDcuMiJOIDc2wrAzMSczNS4wIlc!5e0!3m2!1ses!2sco!4v1720902669362!5m2!1ses!2sco"
        },
        {
            id: 59763257,
            name: "Cultivo El Progreso",
            size: 85,
            image: "https://encolombia.com/wp-content/uploads/2013/06/cana-azucar.jpg",
            location: {
                lat: 3.4612,
                lon: -76.5188
            },
            soil: "Arenoso",
            caneVariety: "CC 93-4888",
            irrigationSystem: "Riego por Aspersión",
            seedtime: new Date("2021-02-22"),
            map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.5640599537446!2d-76.51207492502749!3d3.4555999965188517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjcnMjAuMiJOIDc2wrAzMCczNC4yIlc!5e0!3m2!1ses!2sco!4v1720902695331!5m2!1ses!2sco"
        },
        {
            id: 56964246,
            name: "Cultivo Las Palmas",
            size: 115,
            image: "https://cropaia.com/wp-content/uploads/Sugarcane-field.jpg",
            location: {
                lat: 3.4556,
                lon: -76.5095
            },
            soil: "Limoso",
            caneVariety: "CC 01-593",
            irrigationSystem: "Riego por Gravedad",
            seedtime: new Date("2020-04-04"),
            map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.5060219659263!2d-76.53707492502744!3d3.4693999965050106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjgnMDkuOCJOIDc2wrAzMicwNC4yIlc!5e0!3m2!1ses!2sco!4v1720902713827!5m2!1ses!2sco"
        },
        {
            id: 55127389,
            name: "Cultivo San Antonio",
            size: 140,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMTAv2FXDPl91QwRbJh3rBYDSZJxNl4DEPg&s",
            location: {
                lat: 3.4694,
                lon: -76.5345
            },
            soil: "Franco",
            caneVariety: "V 64-10",
            irrigationSystem: "Riego por Goteo",
            seedtime: new Date("2022-07-30"),
            map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.5791623024083!2d-76.52897492502751!3d3.451999996522454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjcnMDcuMiJOIDc2wrAzMSczNS4wIlc!5e0!3m2!1ses!2sco!4v1720902669362!5m2!1ses!2sco"
        }
    ]

  return (
    <BrowserRouter>
      <HabeasDataNotification />
      <Header supplierData={supplierData} setSupplierData={setSupplierData} menuData={menuData} />
      <main className="main">
        <Container fluid>
          <HelmetProvider>
            <Routes>
              <Route path='/' element={<HomePage supplierData={supplierData} setSupplierData={setSupplierData} menuData={menuData} />} >
                <Route path='profile' element={<ProfilePage supplierData={supplierData} />} />
                <Route path='pending-invoices' element={<PendingInvoicesPage supplierData={supplierData} />} />
                <Route path='payments' element={<PaymentsPage supplierData={supplierData} />} />
                <Route path='certificates' element={<CertificatesPage supplierData={supplierData} />} />
                <Route path='equipments' element={<EquipmentsPage equipments={equipments} />} />
                <Route path='equipments/:id' element={<EquipmentDetailsPage equipments={equipments} />} />
                <Route path='fields' element={<FieldsPage fields={fields} />} />
                <Route path='fields/:id' element={<FieldDetailsPage fields={fields} />} />
                {/* <Route path='equivalent-document' element={<EquivalentDocumentPage supplierData={supplierData} />} /> */}
              </Route>
              <Route path='/register' element={<RegisterPage supplierData={supplierData} setSupplierData={setSupplierData} />} />
              <Route path='/login' element={<LoginPage supplierData={supplierData} setSupplierData={setSupplierData} />} />
              <Route path='/recover_session' element={<ForgotPasswordPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </HelmetProvider>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;