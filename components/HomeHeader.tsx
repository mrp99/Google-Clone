import Link from 'next/link'
import React from 'react'
import { TbGridDots } from 'react-icons/tb';
import { stylesCss } from "@/styles/styles";

import { HotmailUrl } from "@/links/links";
import { ImagesGoogleUrl } from "@/links/links";


export default function HomeHeader() {
  return (
    <header className={stylesCss.header}>
      <div className={stylesCss.spaceItens}>
        <Link href={HotmailUrl} className={stylesCss.underline}>Gmail</Link>
        <Link href={ImagesGoogleUrl} className={stylesCss.underline}>Images</Link>
        <TbGridDots className={stylesCss.iconTb} />
        <button className={stylesCss.btn}>Sign in</button>
      </div>
    </header>
  )
}
