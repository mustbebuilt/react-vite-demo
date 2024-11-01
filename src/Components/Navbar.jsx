import { useState } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'; 

const Navbar = ({ setActiveComponent }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div>
            <nav>
                <button className="burger" onClick={toggleMenu}>
                    &#9776;
                </button>
                <menu className={menuOpen ? 'active' : ''}>
                    <li><a href="#" onClick={(ev) => { ev.preventDefault(); setActiveComponent("welcome"); setMenuOpen(false); }}>Home</a></li>
                    <li><a href="#" onClick={(ev) => { ev.preventDefault(); setActiveComponent("staff"); setMenuOpen(false); }}>Staff</a></li>
                    <li><a href="#" onClick={(ev) => { ev.preventDefault(); setActiveComponent("students"); setMenuOpen(false); }}>Students</a></li>
                    <li><a href="#" onClick={(ev) => { ev.preventDefault(); setActiveComponent("courses"); setMenuOpen(false); }}>Courses</a></li>
                </menu>
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    setActiveComponent: PropTypes.func.isRequired,
};

export default Navbar;
