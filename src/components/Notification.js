import React from 'react';
import "./Notification.scss";

function Notification(props) {
    
    return (
        <div className="notification">
            <h1>{props.message}</h1>
        </div>
    )
}

export default Notification;
