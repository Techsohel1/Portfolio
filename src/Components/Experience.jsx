import React from 'react'
import html from '../../public/html.png'
import javascript from '../../public/javascript.jpg'
import mongodb from '../../public/mongodb.png'
import node from '../../public/node.png'
import reactjs from '../../public/react.png'
import express from '../../public/express.png'
import css from '../../public/css.png'

const Experience = () => {
    const cardItems = [
        {
        id:1,
        logo:mongodb,
        name:"MongoDB"
    },
    {
        id:2,
        logo:express,
        name:"ExpressJS"
    },
    {
        id:3,
        logo:reactjs,
        name:"ReactJS"
    },
    {
        id:4,
        logo:javascript,
        name:"Javascript"
    },
    {
        id:5,
        logo:node,
        name:"NodeJs"
    },
    {
        id:6,
        logo:html,
        name:"Html"
    },
    {
        id:7,
        logo:css,
        name:"Css"
    },

];
  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <p className='capitalize'>I,ve more experience in the below technologies.</p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                {
                    cardItems.map(({id,logo,name})=>(
                        <div className='flex flex-col items-center justify-center cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} className='w-[150px] rounded-full border-[2px]' alt="" />
                            <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                        
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience
