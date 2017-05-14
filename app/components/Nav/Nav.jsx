import React from 'react';
import {Link} from 'react-router-dom';
import 'EstilosNav';

class Nav extends React.Component {
    render() {
        return (
            <nav className="menu-navegacion">
                <ul className="links">
                    <li>
                        <Link to="/">
                            <i className="fa fa-home"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;