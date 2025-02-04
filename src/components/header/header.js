import React, { useEffect, useRef, useState } from "react"
import styles from "./headercss.module.css"
import { Link } from 'react-router-dom';
import Logo from "../../assets/header1logo.jpg"
import Background from "../../assets/header1background.jpg"
const Header = () => {
    
    const [scrollPosition, setScrollPosition] = useState(0)
    //const [hidden, setHidden] = useState(false)
    const header = useRef(0)

    const handleScroll = () => {
      
        if (window.scrollY > scrollPosition) {
            header.current.style.transform = 'translateY(-200px)'
            
        } else {
            header.current.style.transform = 'translateY(0px)'
            
        }
        setScrollPosition(window.scrollY);

    }

    useEffect(() => {
        document.addEventListener('scroll',handleScroll)

        return () => {document.removeEventListener('scroll', handleScroll)} 
    }, [scrollPosition])
    return (
        <div className={styles.container} id='header' ref={header}>

            <div className={styles.logobox}>
                
            </div>
            <div className={styles.linkbox}>
                <Link to="/page1" className={styles.link}>page1</Link>
                <Link to="/page2" className={styles.link}>page2 </Link>
                <Link to="/page3" className={styles.link}>page3</Link>
                
            </div>
            <div className={styles.buttonbox}>
                <button className={styles.button}>login</button>
                <button className={styles.button}>signup</button>

            </div>
           
        </div>
    )
}

export default Header;