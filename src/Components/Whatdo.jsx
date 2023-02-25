import React from 'react'
import eng from './images/eng.png'

const Whatdo = () => {
  return (
    <>
    <div className='text-white w-full pt-8 pb-10 px-4'>

        <p className='text-[#00df9a] pb-12 font-bold text-center md:text-6xl sm:5xl text-5xl '>
          What I Do ?
        </p>

        <div className="max-w-[1580px] mx-auto grid md:grid-cols-2">
          
          <img className='w-[500px] mx-auto my-4 max-md:justify-end' src={eng} alt="engineer" />
          <div className='flex flex-col'>
            <h1 className='md:text-5xl text-center sm:text-4xl text-3xl font-serif py-2 max-sm:text-[43px] text-[rgb(254,205,165)]'>
              Something
            </h1> {/*title of what you do */}
            <p className='pt-12 md:text-2xl sm:text-2xl text-xs max-sm:text-[20px] leading-6'>
              <br/>⚡Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorem voluptatum ut consequatur
              <br/>⚡perspiciatis placeat aperiam accusantium corporis recusandae! Distinctio velit alias ipsum minima 
              <br/>⚡adipisci hic suscipit labore delectus sequi!
            </p> {/*Describe a little*/}
          </div>

        </div>

    </div>
    <hr className='mx-auto' color="gray-900" width={'95%'}/>
    </>
  )
}

export default Whatdo