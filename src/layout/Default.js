import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Default(props) {
    return (
        <div>
            <Navbar/>
                {props.children}
            <Footer/>
        </div>
    )
}

export default Default;
