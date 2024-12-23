import React from "react"
import styles from "../pages/page1.module.css"
import FormComp from "../components/forms/form"
import ListComp from "../components/listcomp/listcomp"
import { useUser } from "../context/usercontext"


const Page1 = () => {

    const {user} = useUser();
    return (
        <div className={styles.page1}>
            page 1
            <div >
                <h2>{user.name}</h2>
                <ListComp/>
                <FormComp/>

            </div>
        </div>
    )
}

export default Page1;