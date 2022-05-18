import React, {useEffect} from 'react';
import Sidebar from './SideBarPages/Sidebar';

const DashBoard = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Sidebar />
        </>
    );
};

export default DashBoard;
