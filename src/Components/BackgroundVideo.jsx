import React from 'react'
import backgroundVideo from '../Assets/bg.mp4'

const BackgroundVideo = () => {
  return (
    <div>
        <video autoPlay loop muted 
          className= "object-cover w-[100vw] h-[100vh] fixed top-0 left-0 -z-10 ">
            <source src={backgroundVideo} type= 'video/mp4'/>
        </video>

    </div>
  )
}

export default BackgroundVideo