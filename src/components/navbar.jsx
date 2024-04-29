import { useState, useRef } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [submenuVisible, setSubmenuVisible] = useState({});
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
    return (
        <div style={{ width: '100%', height: '10vh', marginLeft: '-3em', marginTop: '-6em' }}>
            <nav>
                <div className='burger-menu' onClick={toggleMenu}>
                    <div className='borgir'><h1>≡</h1></div>
                </div>
                <div className={menuClass}>
                    <div className='foodgpt'><p>foodgpt</p></div>
                    <div className='navBarExit' onClick={toggleMenu}><h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </h1></div>
                    <div className='navContainer'>
                        {['recipes', 'my food', 'groceries'].map(item => (
                            <div key={item} className='menu-item' onClick={() => item !== 'groceries' ? toggleSubmenu(item) : handleMenuClick('/groceries')}>
                                <p>
                                    {item}
                                    {item !== 'groceries' && 
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
                                    {item === 'recipes' && (
                                        <div style={{padding: '5px', backgroundColor: '#D9D9D9'}}>
                                            <div onClick={() => handleMenuClick('/Recipe')} className='subtext'>create recipe</div>
                                            <div onClick={() => handleMenuClick('/Recipe')} className='subtext'>saved recipes</div>
                                        </div>
                                    )}
                                    {item === 'my food' && (
                                        <div style={{padding: '5px', backgroundColor: '#D9D9D9'}}>
                                            <div onClick={() => handleMenuClick('/Ingredients')} className='subtext'>pantry</div>
                                            <div onClick={() => handleMenuClick('/Allergies')} className='subtext'>preferences</div>
                                        </div>
                                    )}
                                </div>}
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
            <div className={overlayClass} onClick={toggleMenu}></div>
        </div>
    );
    
}
export default Navbar;
