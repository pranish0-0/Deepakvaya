import React from 'react'
import edu from './images/edu.png'
import pec from './images/pec.jpg'


const Education = () => {
  return (
    <div className='pt-14 pb-10 px-4 w-full text-gray-500'>
        <div className="max-w-[1580px] mx-auto grid md:grid-cols-2">
          
          <img className='w-[500px] mx-auto my-4 max-md:justify-end' src={edu} alt="engineer" />
          <div className='flex flex-col'>
            <p className='text-[#00df9a] pb-12 font-bold text-center md:text-6xl sm:5xl text-5xl '>
                Education
            </p>
            <p className='max-md:text-center md:text-2xl text-left sm:text-xl text-lg pt-4 '>
                Basic Qualification and Certifcations
            </p>
            <ul className='max-md:text-center md:text-2xl text-left sm:text-xl text-lg pt-8'>
                <li>➤one</li>
                <li>➤two</li>
                <li>➤three</li>
            </ul>
          </div>

        </div>

        <div className='text-gray-500 w-full pt-8 pb-10 px-4'>

            <p className='text-[#00df9a] pb-12 font-bold text-center md:text-6xl sm:5xl text-5xl '>
            Degrees Receives
            </p>

            <div className='max-w-[1580px] grid md:grid-cols-3 text-gray-500'>
                <img className='rounded-bl-[100%] rounded-br-[100%] rounded-tl-[100%] rounded-tr-[100%] md:w-[300px] max-md:w-[40%] mx-auto my-4 max-md:justify-end' src={pec} alt="pec" />
                <div className='flex flex-col border-solid md:w-[200%] max-md:w-[103%]  border border-1 rounded-[5px] border-gray p-2' id='shadow'>
                    <div className='border border-[#0e6ba8] bg-blue-100 '>
                        <p className='text-[#00df9a] pb-12 font-bold text-left md:text-6xl max-sm:text-[40px] text-5xl '>
                            Pokhara Engineering College
                        </p>
                        <div className='flex flex-row justify-between'>
                            <p className='text-left md:text-64xl font-bold sm:3xl text-3xl'>Diplomma in Civil Engineering</p>
                            <p className='md:text-3xl sm:2xl text-52xl pr-4 '>2016-2018</p>
                        </div>
                    </div>
                    <div className='mt-12 md:text-2xl text-left sm:text-xl text-lg'>
                            <ul>
                                <li>
                                    ➤I have studied basic Course in this Highschool like Physics , Math , chemistry , Biology and English.
                                </li>
                                <li>
                                    ➤ I was selected for NEB Scholarship which is given to top students in college.
                                </li>
                            </ul>
                        </div>
                </div>

            </div>
        </div>

        <div className='text-gray-500 w-full pt-28 pb-10 px-4'>
            <p className='text-[#00df9a] pb-12 font-bold text-center md:text-6xl sm:5xl text-5xl '>
                Certifications
            </p>
        </div>

    </div>
  )
}

export default Education