import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped} from "react-typed";
import pic from "../../public/sohel.jpeg"
  
const Home = () => {
  return (
    <> 
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello, I'm a </h1>
        
            <ReactTyped
            className='text-red-700 font-bold'
            strings={["Developer","Programmer","Coder"]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
        />
            </div><br />
            <p className='text-base md:text-md text-justify capitalize '>Hello, I’m Sohel Khan, a passionate front-end developer dedicated to creating interactive and user-friendly web experiences. With a solid foundation in Html,Css,Javascript and Reactjs, I specialize in crafting responsive and visually appealing interfaces. Beyond front-end development, I have a strong grasp of backend technologies, including Node.js and MongoDB, enabling me to work across the full stack when required.I thrive on learning and continuously expanding my skill set, having recently achieved mastery in several new technologies. My goal is to stay ahead of the curve and deliver solutions that meet both users and bussiness needs effectively.</p>
            <br />
            {/* Social media icons */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
            <div className='space-y-2' >
                <h1 className='font-bold'>Available On</h1>
                <ul className='flex space-x-5'>
                <li>
                <a href="https://www.facebook.com/profile.php?id=100057340316358" target='_blank'> 
                <FaSquareFacebook  className='text-2xl cursor-pointer m'/>
                </a>
                </li>
                <li><a href="https://www.linkedin.com/in/sohel-khan-3992b4304/" target='_blank'><FaLinkedin className='text-2xl cursor-pointer m' /></a></li> 
                <li><a href="https://www.instagram.com/sohel_038/profilecard/?igsh=dWdtM3l1Zjg0cjlt" target='_blank'><FaSquareInstagram className='text-2xl cursor-pointer m'/></a></li>

                <li><a href="https://web.telegram.org/k/" target='_blank'><FaTelegram  className='text-2xl cursor-pointer m'/></a></li>
            </ul>
            </div>
            <div className='space-y-2'>
            <h1 className='font-bold'>Currently Working On</h1>
                <div className='flex space-x-5'>
                <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            </div> 
            </div>
            </div>
        </div> 
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" /> 
            </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home
