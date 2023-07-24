"use client"

import React, { useState } from 'react'
import Button from './Button'
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';

const Nav = () => {
    const [navbar, setNavbar] = useState(false)

  return (
    <div className= 'shadow-md w-full fixed top-0 left-0'>  {/* topo */}
        <div className='md:flex items-center justify-evenly align-middle bg-gradient-to-bl from-amber-500 to-amber-800 py-4'> {/* menu */}
            <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
                <span>
                    LOGO
                </span>
            </div>
            <div>                
            </div>
            
            <ul className='md:flex md:items-center text-lg md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-full md:pl-0 pl-9 transition-all duration-500 ease-in'>
                <li className='navbarLi'><a href="/">Quem Somos</a></li>
                <li className='navbarLi'><a href="/">Animais Desaparecidos</a></li>
                <li className='navbarLi'><a href="/">Quero Ajudar</a></li>
                <li className='navbarLi'><a href="/">Fale Conosco</a></li>
                <li className='navbarLi'><a href="/">Quero Adotar</a></li>
                <li className='navbarLi'><a href="/">Quero Doar</a></li>
                <li className='navbarLi'><a href="/">Entrar</a></li>
            </ul>
            <Button>
                Teste
                <IonIcon name="menuOutline"></IonIcon>
            </Button>
        </div>
    </div>
  )
}

export default Nav