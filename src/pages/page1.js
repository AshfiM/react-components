import React from "react"
import styles from "../pages/page1.module.css"
import FormComp from "../components/forms/form"
import ListComp from "../components/listcomp/listcomp"


const Page1 = () => {

    
    return (
        <div className={styles.page1}>
            page 1
            <div >
                <ListComp/>
                <FormComp/>

            </div>
        </div>
    )
}

export default Page1;