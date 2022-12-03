import React from 'react'
import { SocialIcon } from 'react-social-icons';


const Socials = () => {
  return (
    <div className='m-2 flex justify-evenly '>
          
        <div className='p-1'>
          <SocialIcon  bgColor = "#FF0000" fgColor = "#FFFFFF" url="https://www.youtube.com/channel/UC2kIgU1hMcvb2DT9CNa5a3g" />
        </div>
        <div className='p-1'>
        <SocialIcon bgColor = "#24292e" fgColor = "#FFFFFF" url="https://github.com/sun-jay?tab=repositories" />
        </div>
        <div className='p-1'>
        <SocialIcon bgColor = "#24292e" fgColor = "#FFFFFF" url="https://www.instagram.com/sunny_jayaram/?hl=en" />
        </div>
        <div className='p-1'>
        <SocialIcon bgColor = "#24292e" fgColor = "#FFFFFF" network="mailto" url="mailto:sunny.jyrm@gmail.com" />
        </div>
        
    
    </div>
  )
}

export default Socials
