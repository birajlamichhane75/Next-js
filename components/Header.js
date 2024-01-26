import React from 'react';
import nav from "../style/nav.module.css"

const Header = (props) => {
    return ( 
        <>
        <div className={nav.top}>
            <h2>
                {props.name}
            </h2>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        
        </>
     );
}
 
export default Header;