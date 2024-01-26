import React from 'react';
import Image from 'next/image';
import postc from '../style/post.module.css'

const Postframe = ({ postimg }) => {
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
                                src={postimg.pp} />
                        </div>
                        <h5>{postimg.username}</h5>
                    </div>

                    <div className={postc.right}>
                    <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>

                <div className={postc.center}>
                    <img className={postc.postimage}

                        src={postimg.image}
                        alt=''
                    />
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

export default Postframe;