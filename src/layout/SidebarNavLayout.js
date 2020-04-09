import React from 'react';
import Sidebar from "../components/Sidebar";
function SidebarNavLayout(props) {
    return (
        <div>
            <Sidebar />
            {props.children}
        </div>
    )
}

export default SidebarNavLayout;
