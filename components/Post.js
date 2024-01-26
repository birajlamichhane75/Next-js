import React from 'react';
import postc from '../style/post.module.css'
import Postframe from './Pframe';
import Line from "../components/Line"

const post = ({ source }) => {

    return (
        <>
            <div className={postc.postbox}>
                {source.map((src) => {
                    return <>
                        <Postframe postimg = {src}/>
                        <Line />
                    </>

                })}

            </div>
        </>
    );
}

export default post;