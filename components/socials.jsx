import React from 'react'
import { useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';





const Socials = () => {

  // useEffect(() => onClick(), [])

  return (
    
    <div className='flex  justify-evenly items-center '>
        <div className='p-1 text-white'>
          <SocialIcon  bgColor = "#FF0000" fgColor = "#FFFFFF" url="https://www.youtube.com/channel/UC2kIgU1hMcvb2DT9CNa5a3g" />
        </div>
        <div className='p-1 text-white'>
          <SocialIcon  bgColor = "#232323" fgColor = "#FFFFFF" url="https://www.linkedin.com/in/sunny-jayaram/" />
        </div>
        <div className='p-1'>
        <SocialIcon bgColor = "#232323" fgColor = "#FFFFFF" url="https://github.com/sun-jay?tab=repositories" />
        </div>
        <div className='p-1'>
        <SocialIcon bgColor = "#232323" fgColor = "#FFFFFF" url="https://www.instagram.com/sunny_jayaram/?hl=en" />
        </div>
        <div className='p-1'>
        <SocialIcon bgColor = "#232323" fgColor = "#FFFFFF" network="mailto" url="mailto:sunny.jyrm@gmail.com" />
        </div>
    </div>
  )
}

// class Socials extends React.Component{

//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     let el = document.querySelector('.myElement');
//     el.classList.add('fade-in');
//   }
//   render(){
//     return (
      
//       <div className='flex  justify-evenly '>
            
//           <div className='p-1'>
//             <SocialIcon  bgColor = "#FF0000" fgColor = "#FFFFFF" url="https://www.youtube.com/channel/UC2kIgU1hMcvb2DT9CNa5a3g" />
//           </div>
//           <div className='p-1'>
//           <SocialIcon bgColor = "#24292e" fgColor = "#FFFFFF" url="https://github.com/sun-jay?tab=repositories" />
//           </div>
//           <div className='p-1'>
//           <SocialIcon bgColor = "#24292e" fgColor = "#FFFFFF" url="https://www.instagram.com/sunny_jayaram/?hl=en" />
//           </div>
//           <div className='p-1'>
//           <SocialIcon bgColor = "#24292e" fgColor = "#FFFFFF" network="mailto" url="mailto:sunny.jyrm@gmail.com" />
//           </div>
          
      
//       </div>
//     )
//     }
// }

export default Socials
