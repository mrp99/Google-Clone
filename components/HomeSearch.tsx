import { SearchCss } from '@/interface/interface';
import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';


const css: SearchCss = {
  form: `flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 
  px-5 py-2 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl`,
  input: `flex-grow focus:outline-none bg-gray-100 text-gray-800`,
  icon: `self-center ml-2 mr-2`,
  btn: `bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 
  rounded-lg px-4 py-2 hover:shadow-md w-36 h-10 transition-shadow`
}

const HomeSearch: React.FC = () => {
  return (
    <>
      <form className={css.form}>
        <AiOutlineSearch className={`${css.icon} text-xl text-gray-500`} />
        <input type="text" className={css.input} placeholder="Pesquisar" />
        <BsFillMicFill className={`${css.icon} text-lg`} />
      </form>
      <div className='flex justify-center mt-8 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4'>
        <button className={css.btn} >Google Search</button>
        <button className={css.btn} >My Lucky Day</button>
      </div>
    </>
  );
}

export default HomeSearch;