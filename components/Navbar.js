import React from 'react';
import Image from 'next/image';
import nav from '../style/nav.module.css'
import { Roboto } from 'next/font/google';
import Menu from './Menu';


const roboto = Roboto({
    weight:'700',
    subsets:['latin'],
    display:"swap"
})

const Navbar = () => {
    return ( 
        <>
        <div className={nav.ntop}>

            <h2 className={`${nav.fb} ${roboto.className}`}>facebook</h2>

            <div className={nav.icon}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-brands fa-facebook-messenger"></i>
            </div>

        </div>
        <div className={nav.menubar}>
            <Menu />
        </div>

        <div className={nav.ncenter}>

            <div className={nav.img}>
                <Image  src="https://birajlamichhane75.github.io/portfolio/images/profile2.png"
                className={nav.profile}
                height = {100}
                width = {100}
                alt = "p"
                />
            </div>


                <input className = {nav.textbar} type='text' placeholder="What's on your mind?" />


            <div className={nav.addphoto}>
            <i class="fa-regular fa-image "></i>
            </div>

        </div>
        <div className='nbottom'>

        </div>
        </>
     );
}
 
export default Navbar;