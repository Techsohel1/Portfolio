import React from 'react'
import { FaFacebook,FaSquareInstagram,FaLinkedin } from 'react-icons/fa6'
const Footer = () => {
  return (
    <> 
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <a href="https://www.facebook.com/profile.php?id=100057340316358" target='_blank'><FaFacebook size={24}/></a> 
                    <a href="https://www.instagram.com/sohel_038/profilecard/?igsh=dWdtM3l1Zjg0cjlt" target='_blank'><FaSquareInstagram size={24}/></a> 
                    <a href="https://www.linkedin.com/in/sohel-khan-3992b4304/" target='_blank'><FaLinkedin size={24}/></a> 
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm'>&copy; 2024 Your Company. All rights reserved.</p>
                    <p className='text-sm'>Supportive Partner &hearts; Sohel Khan</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
