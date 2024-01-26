import React from 'react';
import nav from "../style/nav.module.css"
import Image from 'next/image';
const Profile = ({source}) => {
    return ( 
        <>
        <div className={nav.profileframe}>
            <div className={nav.profilepic}>
                <Image 
                className={nav.pimage}
                src = {source.pp}
                height = {100}
                width = {100}
                alt = ""
                />
            </div>

            <div className={nav.info}>
                <p className={nav.profilename}>{source.name}</p>
                <p className={nav.mutual}>20 mutual friends</p>
                <div className={nav.addrem}>
                    <button className={nav.add}>Add Friend</button>
                    <button className={nav.rem}>Delete</button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Profile;