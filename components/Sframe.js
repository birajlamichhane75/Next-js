import React from 'react';
import Image from 'next/image';
import nav from '../style/nav.module.css'

const Storyframe = ({image}) => {
 
    return (
        <>
            <div className={nav.frame}>
                <div className={nav.innercircle}>
                    <Image className={nav.pimage} 
                    width= {100}
                    height= {100}
                    alt=''
                    src = {image.pp} />
                </div>
                <Image className={nav.image} 
                width= {100}
                height= {100}
                alt=''
                src={image.simage}  />

            </div>
        </>
    );
}

export default Storyframe;