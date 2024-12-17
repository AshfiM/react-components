import React from "react"
import { Routes, Route} from 'react-router-dom';
import Page1 from '/Users/ashfi/Desktop/react/react-components/src/pages/page1.js';
import Page2 from '/Users/ashfi/Desktop/react/react-components/src/pages/page2.js';
import Page3 from '/Users/ashfi/Desktop/react/react-components/src/pages/page3.js';

const RoutesLogic = () => {
    return (

        <Routes>
            <Route path="/page1" element={<Page1/>}></Route>
            <Route path='/page2' element={<Page2/>}></Route>
            <Route path='/page3' element={<Page3/>}></Route>
        </Routes>
     
    )
}
export default RoutesLogic

