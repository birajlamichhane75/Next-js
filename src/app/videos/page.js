"use client"
import React, { useState } from 'react';
import Header from '../../../components/Header';
import Videoframe from '../../../components/Videoframe';

const Videos = () => {
    const [videos, setvideos] = useState([
        {
            name:"Animated Webpage",
            pp:"",
            videosrc:"video7.mp4"
        },
        {
            name:"Modern Landing Page",
            pp:"",
            videosrc:"video4.mp4"
        },
        {
            name:"Scroller Trigger",
            pp:"",
            videosrc:"video6.mp4"
        },
        {
            name:"Click Animation",
            pp:"",
            videosrc:"video2.mp4"
        },
        {
            name:"Dynamic website",
            pp:"",
            videosrc:"video9.mp4"
        },
        {
            name:"web development",
            pp:"",
            videosrc:"video10.mp4"
        },
        {
            name:"ABC",
            pp:"",
            videosrc:"video1.mp4"
        },
        {
            name:"XYZ",
            pp:"",
            videosrc:"video8.mp4"
        },
    ]);
    return ( 
        <>
        <Header name ="Videos"/>
        {
            videos.map((vid)=>{
                return    <Videoframe info = {vid}/>
            })
        }
     
        
        </>
     );
}
 
export default Videos;