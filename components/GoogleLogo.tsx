import React from 'react'
import googleLogo from '@/public/assets/google_logo.svg';

import Image from 'next/image';



const GoogleLogo: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-24">
      <Image src={googleLogo} alt="Google Logo" width={300} height={200}></Image>
    </section>
  )
}


export default GoogleLogo;