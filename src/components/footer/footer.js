import React from "react";
import styles from "./footer.module.css"
import footerLogo from "../../assets/header1logo.jpg"
import fblogo from "../../assets/fblogo.png"
import instalogo from "../../assets/instalogo.png"
import gmaillogo from "../../assets/gmaillogo.jpg"


const Footer = () => {
    return (
        <div className={styles.footercontainer}>
            
            <div className={styles.col}>
                
                <img src={footerLogo} alt="footerLogo"></img>
                <div>
                <h3>comany name</h3>
               
                    <ul>
                        <li>address</li>
                        <li>email</li>
                    </ul>
               

                </div>
               
            </div>

            <div className={styles.col}>
                <div>
                    <img src={fblogo} alt="fblogo"></img>
                    <img src={instalogo} alt="instalogo" ></img>
                    <img src={gmaillogo} alt="gmailogo"></img>
                </div>
            </div>

            <div className={styles.col}>
               
            </div>

            <div className={styles.col}>
                
            </div>
        </div>
    )
}

export default Footer;