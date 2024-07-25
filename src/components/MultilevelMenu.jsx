import { Link } from 'react-router-dom'
import './styles/MultilevelMenu.css'

const MultilevelMenu = ({ data, setNavbarExpand = () => {} }) => {

    const handleClick = e => {

        let isActive = false
        let isSubmenu = false
        const $li = e.target.closest('li')

        if($li.classList.contains("active")) {
            isActive = true
        }
        
        if($li.classList.contains("submenu")) {
            isSubmenu = true
        }
        
        if(isSubmenu) {
            e.preventDefault()
            
            // Cerrar submenus
            let $submenus = document.querySelectorAll(".multilevel-menu .submenu")
            $submenus.forEach(submenu => submenu.classList.remove("active"))

            isActive ? $li.classList.remove("active") : $li.classList.add("active")
        }
    }

    return (
        <nav className="multilevel-menu">
				<ul>
                    {data.map((item, idx) => (
                        <li key={idx} data-key={idx} onClick={e => handleClick(e)} className={item.subItems ? "submenu" : ""}>
                            {item.subItems ?
                            <a href={item.target}>
                                <div className="content">
                                    {item.icon &&<span className={`icon ${item.icon}`}/>}
                                    {item.title}
                                </div>
                                {item.subItems && (<span className="fa-solid fa-chevron-down"/>)}
                            </a> :
                            <Link to={item.target} onClick={() => setNavbarExpand(false)}>
                                <div className="content">
                                    {item.icon &&<span className={`icon ${item.icon}`}/>}
                                    {item.title}
                                </div>
                            </Link>}
                            {item.subItems &&
                                <ul>
                                    {item.subItems.map((subitem, idx) => (
                                        <li key={idx}>
                                            <Link to={subitem.target} onClick={e => setNavbarExpand(false)}>{subitem.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            }
                        </li>
                    ))}
                </ul>
			</nav>
    )
}

export default MultilevelMenu