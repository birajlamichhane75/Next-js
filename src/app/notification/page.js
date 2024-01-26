import React from 'react';
import Header from '../../../components/Header';
import "../notification/nstyle.css"

const Notification = () => {
    return ( 
        <>
        <Header name ="Notifications"/>
        <div className='notibox'>
            <div className='noti'>
            <p>No any notification yet!</p>
            </div>
            <div className='noti'>
            <p>No any notification yet!</p>
            </div>
            <div className='noti'>
            <p>No any notification yet!</p>
            </div>
            <div className='noti'>
            <p>No any notification yet!</p>
            </div>
        </div>
        </>
     );
}
 
export default Notification;