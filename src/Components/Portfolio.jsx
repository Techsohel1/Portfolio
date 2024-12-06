import React from 'react'
import html from '../../public/html.png'
import javascript from '../../public/javascript.jpg'
import mongodb from '../../public/mongodb.png'
import node from '../../public/node.png'
import reactjs from '../../public/react.png'
import express from '../../public/express.png'
import css from '../../public/css.png'

const Portfolio = () => {
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
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
                {
                    cardItems.map(({id,logo,name})=>(
                        <div className='md:w-[300px] h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} className='w-[120px] h-[120] rounded-full border-[2px]' alt="" />
                            <div>
                                <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                <p className='px-2 text-gray-700'>Welcome to my Projects, this Projects really learn something</p>
                            </div>
                            <div className='px-5 py-5'>
                            <a href="https://github.com/Techsohel1" target='_blank'> <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Code on Github</button>  </a>
                            </div> 
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio
