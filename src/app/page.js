"use client"
import React, { useState } from 'react';
import style from '../../style/home.module.css'
import Navbar from '../../components/Navbar';
import Story from '../../components/Story';
import Post from '../../components/Post';
import Line from '../../components/Line';




const Page = () => {

  // for story
  const [story, setstory] = useState(
    [{
      simage: "https://i.pinimg.com/736x/35/87/ed/3587ed1cd0e5e52179925df4b521952e.jpg",
      username: "",
      pp: "https://i.pinimg.com/originals/6e/8f/14/6e8f14a421412eb7313c3696329194fd.jpg"
    },
    {
      simage: "https://th.bing.com/th/id/OIP.SMgG4qPtlmL4WqS_-P2eowHaF8?rs=1&pid=ImgDetMain",
      username: "",
      pp: "https://thumbs.dreamstime.com/z/little-boy-soccer-ball-portrait-cheerful-football-player-striped-uniform-holds-hand-close-up-isolated-75499558.jpg"
    },
    {
      simage: "https://th.bing.com/th/id/OIP.newwcnBz9oUNM0Gl_IokCgHaJL?rs=1&pid=ImgDetMain",
      username: "",
      pp: "https://i.pinimg.com/originals/57/85/05/578505cf1b2aa0f1f377da42b0253c69.jpg"
    },
    {
      simage: "https://th.bing.com/th/id/R.897dbea33e51056f0972a979bece61b0?rik=jvYPteI4yvi9QQ&riu=http%3a%2f%2fsport4kids.biz%2fimages%2feasyblog_images%2f106%2f2014-02-22-12.55.02-2.jpg&ehk=tmp8cw935MqTsw5VdOWMyDBwuA3ZbwscOH39v1wNeoY%3d&risl=&pid=ImgRaw&r=0",
      username: "",
      pp: "https://c8.alamy.com/comp/KE5679/little-footballer-sitting-on-a-panel-and-looking-at-the-camera-isolated-KE5679.jpg"
    },
    {
      simage: "https://images.squarespace-cdn.com/content/v1/57fe007959cc6868d090a56c/1673536680574-GRNVTR0IT8Z9BVJ3OOUM/509A4329.jpg",
      username: "",
      pp: "https://th.bing.com/th/id/OIP.EheyuzAU5871kSe5i6xptgHaE8?w=800&h=534&rs=1&pid=ImgDetMain"
    },
    ]);


    // for Post
  const [postimg, setpostimg] = useState(
    [{
      image: "https://th.bing.com/th/id/OIP.newwcnBz9oUNM0Gl_IokCgHaJL?rs=1&pid=ImgDetMain",
      username: "Leo Messi",
      pp: "https://i.pinimg.com/originals/57/85/05/578505cf1b2aa0f1f377da42b0253c69.jpg"
    },
    {
      image: "https://th.bing.com/th/id/OIP.6aWbfXfE0LnE5TW9q08OzgHaKF?rs=1&pid=ImgDetMain",
      username: "David Beckham",
      pp: "https://th.bing.com/th/id/OIP.v8lchG9Tl_NBABOxvWdkIAHaE8?rs=1&pid=ImgDetMain"
    },
    {
      image: "https://i.pinimg.com/736x/c7/00/a5/c700a5cc555da887d3c0eb819ac03265.jpg",
      username: "Pedri",
      pp: "https://i.pinimg.com/736x/64/fe/fe/64fefe14b12067276b0302ce21d77db2.jpg"
    },
    {
      image: "https://www.si.com/.image/t_share/MTg1ODgxNjg2NjY2Mzg4NjA5/imago1008506380h.jpg",
      username: "Gavi",
      pp: "https://th.bing.com/th/id/OIP.KKacChk-bigy12dbL4zBJgHaEo?rs=1&pid=ImgDetMain"
    },
    {
      image: "https://i.pinimg.com/736x/35/87/ed/3587ed1cd0e5e52179925df4b521952e.jpg",
      username: "Luis Suarez",
      pp: "https://i.pinimg.com/originals/6e/8f/14/6e8f14a421412eb7313c3696329194fd.jpg"
    },
    ]);



 

  return (
    <>

        

          <div className={style.nav}>
            <Navbar />
          </div>

          <div className={style.mline}>
            <Line />
          </div>

          <div className={style.story}>
            <Story source={story}/>
          </div>

          <div className={`${style.mline} ${style.mbline}`}>
            <Line />
          </div>

          <div className={style.post}>
            <Post source={postimg} />

          </div>

     


    </>
  );
}

export default Page;