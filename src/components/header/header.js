import React from "react"
import styles from "./headercss.module.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.container}>
            <Link to="/page1">page1</Link>
            <Link to="/page2">page2</Link>
            <Link to="/page3">page3</Link>
        </div>
    )
}

export default Header;