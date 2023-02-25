import React from 'react'
import {BsFacebook, BsLinkedin} from 'react-icons/bs' 
import {SiInstagram} from 'react-icons/si' 
import ReactTyped from 'react-typed'
import hero from './images/hero2.jpg'
import Whatdo from './Whatdo'

const Home = () => {
  return (
    <>
    <div>
          <section className="text-gray-600 body-font ">
              <div className="container mx-auto flex px-5  py-20 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:ml-[-5px] md:mr-12 max-sm:mb-12 sm:mb-12">
                      <img className="object-cover object-center rounded" alt="hero" src={hero} />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#00df9a]">
                          Deepak Poudel
                      </h1>
                      <div className="flex justify-center items-center">
                          <p className="mb-8 leading-relaxed text-[silver]">
                              A certified <i>Sub Engineer</i>, bachelor at <b>Pokhara Engineering Collage</b>
                              <br />Who loves to
                              <ReactTyped className='pl-2 font-bold text-[rgb(254,205,165)]'
                                  strings={[
                                      'watch',
                                      'observe',
                                      'and learn.'
                                  ]}
                                  typeSpeed={120}
                                  backSpeed={140}
                                  loop />
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
                            <a href="/" rel="noreferrer" target="_blank">
                                <BsLinkedin size={40}/>    
                            </a>
                        </button>
                      </div>

                  </div>
              </div>
          </section>
          <hr className='mx-auto' color="gray-900" width={'95%'}/>
      </div>
      <Whatdo />
      </>
  )
}

export default Home