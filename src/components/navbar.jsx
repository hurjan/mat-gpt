import { useState, useRef } from 'react';
import "../components/styles/Navbar.css"
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [submenuVisible, setSubmenuVisible] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    // Store refs in an object where keys are item names
    const submenuRefs = useRef({});

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        if (!menuVisible) {
            setSubmenuVisible({});
        }
    };

    const toggleSubmenu = (name) => {
        const currentSubmenu = submenuRefs.current[name];
        if (submenuVisible[name]) {
            // Collapse the submenu
            currentSubmenu.style.height = '0px';
            setTimeout(() => {
                setSubmenuVisible(prev => ({ ...prev, [name]: false }));
            }, 50); // Transition time matches CSS for smoothness
        } else {
            // Expand the submenu
            const scrollHeight = currentSubmenu.scrollHeight;
            currentSubmenu.style.height = `${scrollHeight}px`; // Set height directly
            setSubmenuVisible(prev => ({ ...prev, [name]: true }));
        }
    };

    const handleMenuClick = (path) => {
        navigate(path);
        toggleMenu(); // Close the menu after navigating
    };

    const menuClass = menuVisible ? 'menu visible' : 'menu hidden';
    const overlayClass = menuVisible ? 'overlay visible' : 'overlay';

    // List of routes where the navbar should be hidden
    const hiddenRoutes = ["/"];

    // Check if the current route is in the hiddenRoutes array
    const isHidden = hiddenRoutes.includes(location.pathname);

    return (
        <div style={{ }}>
            {!isHidden && (
                <nav>
                    <a href="/">
                        <img className="headerLogo" src="/images/chefbotLogo.png" alt=""/>
                    </a>
                    <div className='burger-menu' onClick={toggleMenu}>
                        <div className='borgir'><h1>≡</h1></div>
                    </div>
                    <div className={menuClass}>
                        <div className='Chefbot' >
                            <a href="/">
                                <img className="navbarLogo" src="/images/chefbotLogo.png" alt=""/>
                            </a>
                        </div>
                        <div className='navBarExit' onClick={toggleMenu}><h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </h1></div>
                        <div className='navContainer'>
                            {['Recipes', 'My food', 'Groceries'].map(item => (
                                <div key={item} className='menu-item' onClick={() => item !== 'Groceries' ? toggleSubmenu(item) : handleMenuClick('/groceries')}>
                                    <p>
                                        {item}
                                        {item !== 'Groceries' && 
                                        <span className={`menu-arrow${item === 'my food' ? '2' : ''} ${submenuVisible[item] ? 'rotate' : ''}`}>
                                            <svg fill="#6F6F6F" height="15px" width="15px" viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                                            </svg>
                                        </span>}
                                    </p>
                                    {item !== 'groceries' && <div ref={el => submenuRefs.current[item] = el} style={{
                                        overflow: 'hidden',
                                        height: '0px', // Initially hidden
                                        transition: 'height 0.3s ease-in-out'
                                    }}>
                                        {item === 'Recipes' && (
                                            <div className='subContent' style={{padding: '5px', backgroundColor: '#B8EAE0'}}>
                                                <div onClick={() => handleMenuClick('/CreateRecipe')} className='subtext'>Create recipe</div>
                                                <div onClick={() => handleMenuClick('/SavedRecipe')} className='subtext'>Saved recipes</div>
                                            </div>
                                        )}
                                        {item === 'My food' && (
                                            <div style={{padding: '5px', backgroundColor: '#B8EAE0'}}>
                                                <div onClick={() => handleMenuClick('/Ingredients')} className='subtext'>Pantry</div>
                                                <div onClick={() => handleMenuClick('/Allergies')} className='subtext'>Preferences</div>
                                            </div>
                                        )}
                                    </div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </nav>
            )}
            <div className={overlayClass} onClick={toggleMenu}></div>
        </div>
    );
}

export default Navbar;
