"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import nav from '../style/nav.module.css'


const Menu = () => {
    const [reqnum, setreqnum] = useState();
    const [notinum, setnotinum] = useState();

    useEffect(() => {
        setreqnum(Math.ceil(Math.random()*10))
        setnotinum(Math.ceil(Math.random()*10))
    }, []);
    
    return (
        <>
            <div className={nav.box}>
                <Link href="/"><i class="ri-home-5-line"></i></Link>
                <Link data-count={reqnum} href="/friends" className={nav.friendnoti}><i class="ri-group-line"></i></Link>
                <Link href="/videos"><i class="ri-movie-line"></i></Link>
                <Link count={notinum} href="/notification" className={nav.noti}><i class="ri-notification-2-line"></i></Link>
                <Link href="/others"><i class="ri-menu-line"></i></Link>
            </div>
            <hr />
        </>
    );
}

export default Menu;