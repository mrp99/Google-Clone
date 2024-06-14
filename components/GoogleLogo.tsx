import React from 'react'
import googleLogo from '@/public/assets/google_logo.svg';
import { imageCss } from "@/styles/styles";

import Image from 'next/image';



const GoogleLogo: React.FC = () => {
  return (
    <div className='flex flex-col items-center mt-24'>
      <Image src={googleLogo} alt={imageCss.desciptLogo} width={500} height={500}></Image>
    </div>
  )

}


export default GoogleLogo;