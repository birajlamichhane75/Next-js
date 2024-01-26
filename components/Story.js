import React from 'react';
import Sframe from '../components/Sframe'
import nav from '../style/nav.module.css'

const story = ({source}) => {
    return ( 
        <>
        <div className={nav.storybox}>
        {source.map((imgsrc)=>{

        return <Sframe image = {imgsrc}/>
        
        })}
    
        </div>
        </>
     );
}
 
export default story;