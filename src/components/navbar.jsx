import { useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleMenuClick = (path) => {
        toggleMenu(); // Close the menu when a menu item is clicked
        navigate(path); // Navigate to the specified path
    };

    
    const menuClass = menuVisible ? 'menu visible' : 'menu hidden';
    const overlayClass = menuVisible ? 'overlay visible' : 'overlay';



    return (
                    <div style={{ width: '100%', height: '10vh', marginLeft: '-3em', marginTop: '-6em' }}>            <nav>
                                    <div className='burger-menu' onClick={toggleMenu}>
                                    <div className='borgir'><h1>≡</h1></div>
                                    </div>
                                    <div className={menuClass}>

                                        {<div className='foodgpt'><p>foodgpt</p></div>}

                                        {<div className='navBarExit' onClick={toggleMenu}><h1>                        {/* SVG icon for close */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="42"
                                                height="42"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-x"
                                            >
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                    </h1>
                    </div>}
                    <div className='navContainer'>
                            {/* Menu items with route paths */}
                            <div className='recept' onClick={() => handleMenuClick('/Recipe')}>
                                <p>recipes</p>
                            </div>
                            <div className='minSida' onClick={() => handleMenuClick('/')}>
                                <p>my page</p>
                            </div>
                            <div className='inkopslista' onClick={() => handleMenuClick('/Ingredients')}>
                                <p>grocery list</p>
                            </div>
                        </div>

                </div>
            </nav>
            <div className={overlayClass} onClick={toggleMenu}></div> {/* Optional: close menu when overlay is clicked */}
        </div>
    );
};

export default Navbar;



{/* <div style={{ width: '100%', height: '10vh', marginLeft: '-3em', marginTop: '-6em' }}>            <nav>
 */}