import React from "react"
import { useUser } from "../context/usercontext";
import Loading from "../components/loading/loading";

const Page2 = () => {
    const {user} = useUser()
    return (
        <div >
            page 2
            <h2>{user.name}</h2>
            <Loading/>
        </div>
    )
}

export default Page2;