import React from 'react'
import Button from './Button'

const Nav = () => {
  return (
    <div className= 'shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-amber-700 py-4'>
            <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
                <span>
                    LOGO
                </span>
            </div>
            <div>
                <ion-icon name="menu"></ion-icon>
                
            </div>
            <ul className='md:flex md:items-center text-lg md:pb-0 pb-12 absolute md:static bg-amber-700 md:z-auto z-[-1] left-0 w-full md:w-full md:pl-0 pl-9 transition-all duration-500 ease-in'>
                <li className='text-white md:ml-8 md:my-0 my-7 hover:text-gray-400 duration-500'><a href="/">Quem Somos</a></li>
                <li className='text-white md:ml-8 md:my-0 my-7 hover:text-gray-400 duration-500'><a href="/">Animais Desaparecidos</a></li>
                <li className='text-white md:ml-8 md:my-0 my-7 hover:text-gray-400 duration-500'><a href="/">Quero Ajudar</a></li>
                <li className='text-white md:ml-8 md:my-0 my-7 hover:text-gray-400 duration-500'><a href="/">Fale Conosco</a></li>
                <li className='text-white md:ml-8 md:my-0 my-7 hover:text-gray-400 duration-500'><a href="/">Quero Adotar</a></li>
                <li className='text-white md:ml-8 md:my-0 my-7 hover:text-gray-400 duration-500'><a href="/">Quero Doar</a></li>
                <li className='text-white md:ml-8 md:my-0 my-7 hover:text-gray-400 duration-500'><a href="/">Entrar</a></li>
                <Button>Vamos lá</Button>
            </ul>
        </div>
    </div>
  )
}

export default Nav