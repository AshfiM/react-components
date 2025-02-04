import React from "react"
import { useUser } from "../context/usercontext";
import Loading from "../components/loading/loading";
import Freeze from "../components/freeze/freeze";
import styles from "../pages/page1.module.css"
const Page2 = () => {
    const {user} = useUser()
    return (
        <div className={styles.page1}>
            page 2
            <h2>{user.name}</h2>
            <Loading/>
            <Freeze/>
        </div>
    )
}

export default Page2;