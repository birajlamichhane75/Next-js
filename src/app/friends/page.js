"use client"
import React, { useState } from 'react';
import "../friends/fstyle.css"
import Header from '../../../components/Header';
import Profile from '../../../components/Profile';


const Friends = () => {
    
    // for Friend request
    const [addfriend, setaddfriend] = useState([
        {
          pp:"https://birajlamichhane75.github.io/portfolio/images/profile2.png",
          name:"Biraj Lamichhane"
        },
        {
          pp:"https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/372691945_2755192314634886_7099188813173244748_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=J_9ZAURthkkAX8bfzso&_nc_ht=scontent.fktm20-1.fna&oh=00_AfAy10V0nGs9U0nJ0vPsHuvO1FWVSGYeHl064eljslMTgg&oe=65B2ACD1",
          name:"Rama Lamichhane"
        },
        {
          pp:"https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/278910794_4651720854934046_4945463576951389601_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Jm4FntjGSlsAX9RcMky&_nc_oc=AQm84YtTPgfLyfSnVW2GbAASQJ6-LH5lcJXXIJo6nJjsU0wQdHBDszQIzB8gExI45SU&_nc_ht=scontent.fktm20-1.fna&oh=00_AfACf2LxtkP2md8SHl5R3yv3KYuoMbpPOHapXRNiRX31Lw&oe=65B2775C",
          name:"Binod Lamichhane"
        },
        {
          pp:"https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/295334849_590212389497893_7880633355876900387_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=dFLSHQ11rM0AX_nnRCQ&_nc_ht=scontent.fktm20-1.fna&oh=00_AfB9kOKfYS7rkHLP3aJ8sw-NpMrE7W2cV1R3U_9N5oYwXw&oe=65B37CAF",
          name:"Bijesh Lamichhane"
        },
        {
          pp:"https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/415982526_874876134385080_5099254799081176410_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=DCvHVHdr0GoAX8cDVHH&_nc_ht=scontent.fktm20-1.fna&oh=00_AfDeuaf506270mFOsChh66cr5WcRRHvCghJBlXXBi4P93A&oe=65B39433",
          name:"Anish Lamichhane"
        },
        {
          pp:"https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/327417717_1001227794170109_4766221869665894797_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=0BuU-L3yOqYAX-e9PO8&_nc_ht=scontent.fktm20-1.fna&oh=00_AfDcQX8G5FzWIsJHJyeL-FwlvfZ5O6A-V90HuFciQ57hUg&oe=65B3C71E",
          name:"Anoj Lamichhane"
        },
        {
          pp:"https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/254569318_1292981684511141_7945568761273058031_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=YSl4-DWsblkAX8x1eqI&_nc_ht=scontent.fktm20-1.fna&oh=00_AfA65fyLzgsv7l0c5iFk-CTTO7krjVMJVBO80RRHzBZ7rw&oe=65B3485C",
          name:"Ram Lamichhane"
        },
        {
          pp:"https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/269249116_108511515027836_3236320125841214710_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=_UyTKGas8aQAX-i1tOY&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBz5bLbr3SiEvn2H5SsUXLRThFnOuR8AGJdgOccBPYCzQ&oe=65B3EB71",
          name:"Urmila Lamichhane"
        },
      ]);

    return ( 
        <>
        <div className='friendpage'>
            <Header name ="Friends"/>
        </div>
        <div classnam="addfriend">
           { 
           addfriend.map((e)=>{
                return <Profile source = {e}/>
            })
            }
            
        </div>
        </>
     );
}
 
export default Friends;