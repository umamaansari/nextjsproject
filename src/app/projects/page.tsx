import React from 'react'
import Image from 'next/image'
const Project = () => {
  return (
    <section className="text-red-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          MY Projects 
        </h1>
        <div className="h-1 w-20 bg-red-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-white">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably havent
        heard of them man bun deep jianbing selfies heirloom prism food truck
        ugh squid celiac humblebrag.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/OIP (5).jpg"
            alt="content"
            width={200}
            height={200}
          />
          <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
            Typescript
          </h3>
          <h2 className="text-lg text-red-900 font-medium title-font mb-4">
          Countdown Timer
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/OIP (7).jpg"
            alt="content"
            width={200}
            height={200}
          />
          <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
           Typescript
          </h3>
          <h2 className="text-lg text-red-900 font-medium title-font mb-4">
           Word Counter
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/OIPopen.jpg"
            alt="content"
            width={200}
            height={200}
          />
          <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
          Typescript
          </h3>
          <h2 className="text-lg text-red-900 font-medium title-font mb-4">
            Currency Converter
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/Red.png"
            alt="content"
            width={200}
            height={200}
          />
          <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
            Typescript
          </h3>
          <h2 className="text-lg text-red-900 font-medium title-font mb-4">
          Student Management system
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Project