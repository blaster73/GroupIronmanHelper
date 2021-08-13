import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>Group Ironman</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/NewMeetups'>Add New Meetups</Link>
                </li>
                <li>
                    <Link to='/Favorites'>My Favorites</Link>
                </li>
                <li>
                    <Link to='/TasksList'>Tasks List</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation