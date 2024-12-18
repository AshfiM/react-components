import React from "react";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";
const LayoutWithHeader = () => 
    (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )


export default LayoutWithHeader;