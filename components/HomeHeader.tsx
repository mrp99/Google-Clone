import Link from 'next/link'
import React from 'react'

import { TbGridDots } from 'react-icons/tb';
import { Urls } from "@/enums/url";


const btnCss: string = `
  bg-blue-500 
  text-white 
  px-6 py-2 
  font-medium 
  rounded-md 
  hover:brightness-105 
  hover:shadow-md 
  transtition-shadow
`;


const HomeHeader: React.FC = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href={Urls.gmail} className="hover:underline">Gmail</Link>
        <Link href={Urls.imagesGoogle} className="hover:underline">Images</Link>
        <TbGridDots className=" bg-transparent hover:bg-gray-300 rounded-full text-4xl p-2`" />
        <button className={btnCss}>Sign in</button>
      </div>
    </header>
  )
}

export default HomeHeader;