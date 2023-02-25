import React from 'react'
import {BsFacebook, BsLinkedin} from 'react-icons/bs' 
import {SiInstagram} from 'react-icons/si' 
import {GrMail} from 'react-icons/gr' 
import hero from './images/hero.jpg'

const Contact = () => {
  return (
    <div>
        
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5  py-20 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:ml-[-5px] md:mr-12 max-sm:mb-12 sm:mb-12">
                    <img className="rounded-tr-full object-cover object-center rounded" alt="hero" src={hero} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center justify-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#00df9a]">
                        Contact Me
                    </h1>
                    <div className="flex justify-center items-center">
                        <p className="mb-8 leading-relaxed text-[silver]">
                            I am available on almost every social media. You can message me, I will reply within 24 hours.I can help you with Construction site supervision
                        </p>
                    </div>

                    <div className="flex justify-center">
                    <button className="ml-4 w-14 justify-center items-center inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-100 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded text-lg">
                        <a href="https://www.facebook.com/deep.luck.10" rel="noreferrer" target="_blank">
                            <BsFacebook size={40}/>
                        </a>
                    </button>
                    <button className="ml-4 w-14 justify-center items-center inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-100 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded text-lg">
                        <a href="https://www.instagram.com/deepak_vaya/" rel="noreferrer" target="_blank">
                            <SiInstagram size={40}/>    
                        </a>
                    </button>
                    <button className="ml-4 w-14 justify-center items-center inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-100 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded text-lg">
                        <a href="mailto:reachdeepakhere@gmail.com" rel="noreferrer" target="_blank">
                            <GrMail size={40}/>    
                        </a>
                    </button>
                    <button className="ml-4 w-14 justify-center items-center inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-100 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded text-lg">
                        <a href="/" rel="noreferrer" target="_blank">
                            <BsLinkedin size={40}/>    
                        </a>
                    </button>
                    </div>

                </div>
            </div>
        </section>

        <div className="max-w-[1580px] mx-auto grid md:grid-cols-2 text-[rgb(254,205,165)]">
            <img className='rounded-bl-[100%] rounded-br-[100%] rounded-tl-[100%] rounded-tr-[100%] w-[500px] mx-auto my-4 max-md:justify-end' src="https://thumbs.gfycat.com/PertinentUntriedAsianwaterbuffalo-max-1mb.gif" alt="map" />
            <div className='flex flex-col'>
                <h1 className='md:text-5xl text-center sm:text-4xl text-3xl font-serif py-2 max-sm:text-[43px] text-[#00df9a]'>
                    Address
                </h1>
                <p className=" md:text-3xl text-center sm:text-2xl text-xl pt-8">
                    Pokhara, Kaski - Nepal, <br/>Birauta - 33800
                </p>
                <div className='flex flex-col mt-12'>
                    <h1 className='md:text-4xl text-center sm:text-3xl text-2xl font-serif py-2 max-sm:text-[35px] text-[#00df9a]'>
                        Phone Number
                    </h1>
                    <p className=" md:text-2xl text-center sm:text-xl text-lg pt-4">
                    +977 9840454840
                    </p>
                </div>
            </div>
            
          </div>

        </div>
  )
}

export default Contact