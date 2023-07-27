"use client"

import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Nav = () => {
    let [isOpen, setisOpen] = useState(false)

  return (
    <div className= 'shadow-md w-full fixed top-0 inset-x-0'>
        <div className='md:flex justify-between items-center md:px-10 py-7 px-7 bg-marrom_escuro'>
            <div className='flex text-2xl cursor-pointer items-center'>
                <img className="md:h-24 h-16 fixed left-0" src="./footer/segunda-chance.png" alt="" />
            </div>
            
            <div onClick={() => setisOpen(!isOpen)} className='h-7 w-7 absolute right-8 top-4 cursor-pointer md:hidden text-white'>
                {
                    isOpen ? <XMarkIcon/> : <Bars3Icon/>
                }

            </div>
 
            <ul className={`md:flex md:items-center justify-center md:pb-0 pb-12 md:static text-lg pl-4 bg-marrom_escuro md:gap-5 absolute md:z-auto z-[-1] left-0 w-full transition-all duration-700 ease-in ${isOpen ? 'top-14' : 'top-[-490px]'}`}>
                <li className='navbarLi'><a href="/">Quem Somos</a></li>
                <li className='navbarLi'><a href="/">Animais Desaparecidos</a></li>
                <li className='navbarLi'><a href="/">Quero Ajudar</a></li>
                <li className='navbarLi'><a href="/">Fale Conosco</a></li>
                <li className='navbarLi'><a href="/">Quero Adotar</a></li>
                <li className='navbarLi'><a href="/">Quero Doar</a></li>

                <button className='btn bg-white text-black py-2 px-3 md:ml-8 rounded font-bold md:absolute md:right-4'>
                Entrar
                </button>
            </ul>
            
        </div>
    </div>
  )
}

export default Nav