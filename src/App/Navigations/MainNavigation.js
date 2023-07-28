import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end
                            className={({ isActive }) => isActive ? classes.active : undefined }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts" end
                            className={({ isActive }) => isActive ? classes.active : undefined }
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
