import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <Link to="/"  className={isActive('/') || isActive('/dashboard') ? 'active' : ''} > Dashboard </Link>
                    </li>
                    <li>
                        <Link  to="/about" className={isActive('/about') ? 'active' : ''} > About </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;