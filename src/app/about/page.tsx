import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>
        
  <section className="text-white body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-900">
            About Me
        </h1>
        <p className="mb-8 leading-relaxed">
          Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
          typewriter affogato, hella selvage wolf narwhal dreamcatcher.
        </p>
        <div className="flex w-full md:justify-start justify-center items-end">
          <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
            <label
              htmlFor="hero-field"
              className="leading-7 text-sm text-red-600"
            >
              Placeholder
            </label>
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
           button
          </button>
        </div>
        <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
           Follow Me
        </p>
        <div className="flex lg:flex-row md:flex-col">
          <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 mb-1">LINKDIN</span>
              <span className="title-font font-medium">GITHUB</span>
            </span>
          </button>
          <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 mb-1">
                GITHUB
              </span>
              <span className="title-font font-medium">App Store</span>
            </span>
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <div>
      <Image
          className="object-cover object-center rounded"
          alt=""
          src="/dp.jpg"
          width={400}
          height={400}
        />
       </div>
    </div>
    </div>
  </section>
  <Skills/>
    </div>
   
  )
}

export default About;




 const  Skills = () => {
  return (
    <div>
        <h2 className='mt-18 text-center text-4xl font underline text-red-800'>My Skills</h2>
        <ul className=''>
            <li className='text-2xl text-white font-bold ml-16'>HTML</li><div className='w-[28%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
            <li className='text-2xl text-white font-bold ml-16'>CSS</li><div className='w-[27%] ml-16 mb-3 h-4 bg-white rounded-2xl'></div>
            <li className='text-2xl text-white font-bold ml-16'>TYPESCRIPT</li><div className='w-[20%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
            <li className='text-2xl text-white font-bold ml-16'>JAVASCRIPT</li><div className='w-[10%] ml-16 mb-3 h-4 bg-white rounded-2xl'></div>
            <li className='text-2xl text-white font-bold ml-16'>REACT</li><div className='w-[10%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
            <li className='text-2xl text-white font-bold ml-16'>NEXTJS</li><div className='w-[20%] ml-16 mb-3 h-4 bg-white rounded-2xl'></div>
        </ul>
    </div>
  )
}


