import React from 'react';
import Image from 'next/image';
import postc from '../style/post.module.css'


const Videoframe = ({info}) => {
    console.log(info)
    return (
        <>
            <div className={postc.frame}>

                <div className={postc.top}>
                    <div className={postc.left}>
                        <div className={postc.innercircle}>
                        <Image className={postc.profileimage}
                                width={100}
                                height={100}
                                alt=''
                                src="/vercel.svg"/>
                        </div>
                        <h5>{info.name}</h5>
                    </div>

                    <div className={postc.right}>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>

                <div className={postc.center}>
                    <video width="100%" height="100%" controls autoPlay>
                        <source src={"/"+info.videosrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className={postc.bottom}>

                    <div className={postc.blank}>
                        <p>7 Likes</p>
                    </div>

                    <div className={postc.reaction}>
                        <div className={`${postc.like} ${postc.lcs}`}><i class="ri-thumb-up-line"></i><p>Like</p></div>
                        <div className={`${postc.comment} ${postc.lcs}`}><i class="ri-chat-2-line"></i><p>Comment</p></div>
                        <div className={`${postc.share} ${postc.lcs}`}><i class="ri-share-forward-line"></i><p>Share</p></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Videoframe;