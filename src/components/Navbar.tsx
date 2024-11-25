import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div><>
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="" className="flex title-font font-medium items-center text-gray-800 mb-4 md:mb-0">
        <h2 className='text-3xl font-bold text-red-800 hover:text-orange-800 '>UA</h2>
          <span className="ml-3 text-xl text-white hover:text-red-900">Protfolio</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
          <Link href="/" className="mr-5 hover:text-red-900">Home</Link>
          <Link  href="/about"className="mr-5 hover:text-red-900">About</Link>
          < Link href="/projects" className="mr-5 hover:text-red-900">Projects</Link>
          <Link href="/contact" className="mr-5 hover:text-red-900">Contact</Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-900 rounded text-base mt-4 md:mt-0">
          Button
        </button>
      </div>
    </header>
  </>
  </div>
  )
}

export default Navbar