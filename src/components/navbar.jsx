import { useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [submenuVisible, setSubmenuVisible] = useState({});
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        setSubmenuVisible({}); // Reset submenu visibility when toggling main menu
    };

    const toggleSubmenu = (name) => {
        setSubmenuVisible(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const handleMenuClick = (path) => {
        navigate(path);
        toggleMenu(); // Close the menu after navigating

    };

    const menuClass = menuVisible ? 'menu visible' : 'menu hidden';
    const overlayClass = menuVisible ? 'overlay visible' : 'overlay';

    return (
        <div style={{ width: '100%', height: '10vh', marginLeft: '-3em', marginTop: '-6em' }}>
            <nav>
                <div className='burger-menu' onClick={toggleMenu}>
                    <div className='borgir'><h1>≡</h1></div>
                </div>
                <div className={menuClass}>
                {<div className='foodgpt'><p>foodgpt</p></div>}
                    <div className='navBarExit' onClick={toggleMenu}><h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </h1></div>
                    <div className='navContainer'>
                        <div className='recept' onClick={() => toggleSubmenu('recipes')}>
                            <p>recipes</p>
                            {submenuVisible.recipes && (
                                <div className='submenu'>
                                    <div onClick={() => handleMenuClick('/Recipe')} style={{ backgroundColor: '#D9D9D9' }}>
                                        <div className='subtext'>create recipe</div>
                                         </div>
                                    <div onClick={() => handleMenuClick('/Recipe')} style={{ backgroundColor: '#D9D9D9' }}>
                                         <div className='subtext'>save recipe</div>
                                            </div>
                                </div>
                            )}
                        </div>
                        <div className='minSida' onClick={() => toggleSubmenu('myPage')}>
                            <p>my page</p>
                            {submenuVisible.myPage && (
                                <div className='submenu'>
                                    <div onClick={() => handleMenuClick('/Ingredients')} style={{ backgroundColor: '#D9D9D9' }}> <div className='subtext'>pantry</div></div>
                                    <div onClick={() => handleMenuClick('/Allergies')} style={{ backgroundColor: '#D9D9D9' }}> <div className='subtext'>preferences</div></div>
                                </div>
                            )}
                        </div>
                        <div className='inkopslista' onClick={() => handleMenuClick('/Ingredients')}>
                            <p>groceries</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={overlayClass} onClick={toggleMenu}></div>
        </div>
    );
};

export default Navbar;
