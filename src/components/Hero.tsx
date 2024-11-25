import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1">
      <div className="ml-[10%] mt-16">
        <Image
          src="/dp.jpg"
          width={300}
          height={300}
          alt="Umama Ansari"
          className="rounded-full ml-[40%]"
        />
      </div>
      <div>
        <h2 className="text-6xl text-left gap-y-3 ml-[20%] font-bold text-white mt-16">
          Hello, I Am Umama Ansari
        </h2>
        <div className="ml-[20%] flex gap-14 mt-12">
          <button className="text-xl p-3 border-2 border-red-800 rounded-xl">
            <Link href="/about">About Me</Link>
          </button>
          <button className="text-xl p-3 border-2 border-red-800 rounded-xl">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
