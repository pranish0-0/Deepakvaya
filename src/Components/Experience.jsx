import React, { useState } from 'react'
import exp from './images/exp.png'
import {BsPlusLg} from 'react-icons/bs' 
import {FaMinus} from 'react-icons/fa' 

const Experience = () => {

    const[open1, setOpen1] = useState(false);
    const[open2, setOpen2] = useState(false);
    const[open3, setOpen3] = useState(false);

    const openBox1 = () => {
        setOpen1(!open1);
        setOpen2(false);
        setOpen3(false);
    }
    const openBox2 = () => {
        setOpen1(false);
        setOpen2(!open2);
        setOpen3(false);
    }
    const openBox3 = () => {
        setOpen1(false);
        setOpen2(false);
        setOpen3(!open3);
    }

  return (
    <div className='text-gray-500 pt-14 pb-10 px-4 w-full'>

        <div className="max-w-[1580px] mx-auto grid md:grid-cols-2">
          
          <img className='w-[500px] mx-auto my-4 max-md:justify-end' src={exp} alt="engineer" />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] mad-md:pb-10 md:pb-12 font-bold text-center md:text-6xl sm:5xl text-5xl '>
                Experience
            </p>
            <p className='max-md:text-center md:text-4xl text-left sm:text-xl text-lg pt-2 '>
                Work, Internship and Volunteership
            </p>
          </div>

        </div>

        <div className='pt-8'>
            <ul>
                <li>
                    <div className='border border-gray-400 w-[95%] mx-auto justify-between flex flex-row mt-5 cursor-pointer'
                         onClick={openBox1}>
                            <p className='p-4 md:text-xl sm:text-xl text-xl'>Work</p>
                            {!open1 ? <BsPlusLg className='m-5'/> : <FaMinus className='m-5'/>}                            
                    </div>
                </li>
                <div className={!open1 ? 'hidden' : 'mt-4 rounded-3xl border border-gray-500 w-[92%] mx-auto h-36'}>
                    
                    {/* <ul className='ml-4'>
                        <li>➤one</li>
                        <li>➤two</li>
                        <li>➤three</li>
                    </ul> */}
                </div>

                <li>
                    <div className='border border-gray-400 w-[95%] mx-auto justify-between flex flex-row mt-5 cursor-pointer'
                          onClick={openBox2}>
                        <p className='p-4 md:text-xl sm:text-2xl text-xl'>Internships</p>
                        {!open2 ? <BsPlusLg className='m-5'/> : <FaMinus className='m-5'/>}  
                    </div>
                </li>
                <div className={!open2 ? 'hidden' : 'mt-4 rounded-3xl border border-gray-500 w-[92%] mx-auto h-36'}>
                    
                    {/* <ul className='ml-4'>
                        <li>➤one</li>
                        <li>➤two</li>
                        <li>➤three</li>
                    </ul> */}
                </div>

                <li>
                    <div className='border border-gray-400 w-[95%] mx-auto justify-between flex flex-row mt-5 cursor-pointer'
                          onClick={openBox3}>
                        <p className='p-4 md:text-xl sm:text-2xl text-xl'>Volunteerships</p>
                        {!open3 ? <BsPlusLg className='m-5'/> : <FaMinus className='m-5'/>}  
                    </div>
                </li>
                <div className={!open3 ? 'hidden' : 'mt-4 rounded-3xl border border-gray-500 w-[92%] mx-auto h-36'}>
                    
                    {/* <ul className='ml-4'>
                        <li>➤one</li>
                        <li>➤two</li>
                        <li>➤three</li>
                    </ul> */}
                </div>
                
            </ul>
          </div>

    </div>
  )
}

export default Experience