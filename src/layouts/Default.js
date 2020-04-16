import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./DefaultLayout.scss";
function Default(props) {
    return (
        <div className="default-layout">
            <Navbar/>
                {props.children}
            <Footer/>
        </div>
    )
}

export default Default;
