import { useEffect } from "react"
import { useState, useRef } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

import './styles/HomePage.scss'

const MenuItem = ({ menuItem }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(prev => !prev);
    const location = useLocation()

	return (
		<>
			<Link to="/" onClick={(e) => {e.preventDefault(); toggleMenu();}}>
                <i className={menuItem.icon} /><span className={location.pathname === menuItem.target ? 'active subMenuHolder' : 'subMenuHolder'}><span>{menuItem.title}</span>{isOpen ? <span className="fa-solid fa-angle-up"></span> : <span className="fa-solid fa-angle-down"></span>}</span>
            </Link>
            {
                menuItem.subitems.map((submenuItem,subMenuIndex) => 
                    <Link className={isOpen ? "subMenuItem fadeIn" : "subMenuItem fadeOut"} key={"subMenu"+subMenuIndex} to={submenuItem.target}>
                        <i className={submenuItem.icon} /><span className={location.pathname === submenuItem.target ? 'active' : ''}>{submenuItem.title}</span>
                    </Link>
                )
            }
		</>
	);
};

const HomePage = ({ setSupplierData, menuData }) => {

    const [hasLoaded, setHasLoaded] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    const [hiddenMenu, setHiddenMenu] = useState(false)
    const $menu = useRef(null)

    const toggleMenu = () => {
        $menu.current.classList.toggle('hidden')
        setHiddenMenu(!hiddenMenu)
    }

    useEffect(() => {
        if (!hasLoaded) {
            setHasLoaded(true)
            navigate('/home')
        }
        // if(!supplierData) {
            // navigate('/login')
        // }
        // else 
        
    }, [hasLoaded, navigate])

    return (
        <div className="home-page">
            {/* <aside className="menu d-none d-lg-block" ref={$menu}>
                <nav>
                    <ul>
                        {menuData.map((menuItem,menuIndex) => (
                            <li key={menuItem.title}>
                                {
                                    menuItem.subitems ?
                                    <>
                                    <MenuItem key={menuIndex} menuItem={menuItem} />
                                    </> :
                                    <Link key={menuIndex} to={menuItem.target} onClick={menuItem.target=== '/login' ? () => { sessionStorage.removeItem('supplierData'); setSupplierData(null) } : null}>
                                        <i className={menuItem.icon} /><span className={location.pathname === menuItem.target ? 'active' : ''}>{menuItem.title}</span>
                                    </Link>
                                }
                            </li>
                        ))}
                        <li>
                            <div className="circle" onClick={toggleMenu}>
                                {hiddenMenu ? <i className="fas fa-chevron-right" /> : <i className="fas fa-chevron-left" />}
                            </div>
                        </li>
                    </ul>
                </nav>
            </aside> */}
            <Outlet />
        </div>
    )
}

export default HomePage