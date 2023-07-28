"use client"

import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'


const Nav = () => {
    let [isOpen, setisOpen] = useState(false)

  return (
    <div className= 'shadow-md fixed top-0 w-full inset-x-0'>
        <div className='md:flex justify-between items-center md:px-10 py-7 px-7 bg-marrom_escuro'>
            <div className='flex text-2xl cursor-pointer items-center'>
                <Link className="fixed left-0" href={"/"}>
                    <img className="md:h-24 h-16 " src="./footer/segunda-chance.png" alt="" />
                </Link>
            </div>
            
            <div onClick={() => setisOpen(!isOpen)} className='h-7 w-7 absolute right-8 top-4 cursor-pointer md:hidden text-white'>
                {
                    isOpen ? <XMarkIcon/> : <Bars3Icon/>
                }

            </div>
 
            <ul className={`md:flex md:items-center justify-center md:pb-0 pb-12 md:static text-lg pl-4 bg-marrom_escuro md:gap-5 absolute md:z-auto z-[-1] left-0 w-full transition-all duration-700 ease-in ${isOpen ? 'top-14' : 'top-[-490px]'}`}>
                <li className='navbarLi'><Link  href="/">Quem Somos</Link></li>
                <li className='navbarLi'><Link  href="/">Animais Desaparecidos</Link> </li>
                <li className='navbarLi'><Link  href="/">Quero Ajudar</Link></li>
                <li className='navbarLi'><Link  href="/">Fale Conosco</Link> </li>
                <li className='navbarLi'><Link  href="/">Quero Adotar</Link></li>
                <li className='navbarLi'><Link  href="../pages/login">Quero Doar</Link></li>

                <button className='btn bg-white text-black py-2 px-3 md:ml-8 rounded font-bold md:absolute md:right-4'>
                <Link  href="/pages/login">Entrar</Link>
                </button>
            </ul>
            
        </div>
    </div>
  )
}

export default Nav