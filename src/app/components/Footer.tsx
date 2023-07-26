"use client"

import logo from "../../../public/footer/Logo.png"

const Footer = () => {
  return (
    <footer className= 'shadow-md w-full border-t-2'>
        <div className='md:px-16 py-4 px-7 bg-marrom_escuro'>
            <div className="flex-col mt-4">
                <ul className="grid grid-cols-3 text-center md:gap-8 mb-4 font-semibold">
                    <li className="footerLi">ADOTE</li>
                    <li className="footerLi">DIVULGUE UM ANIMAL</li>
                    <li className="footerLi">COLABORE</li>
                    <li className="footerLi">SOBRE</li>
                    <li></li>
                    <li className="footerLi">PERFIL </li>
                </ul>
                
                <div className="flex items-center justify-center mt-14">
                    <picture className="flex justify-center items-center gap-14 w-10">
                        <img className="cursor-pointer" src="./footer/instagram.png" alt="Instagram" />
                        <img className="cursor-pointer" src="./footer/facebook.png" alt="Facebook" />
                        <img className="cursor-pointer" src="./footer/youtube.png" alt="Youtube" />
                        <img className="cursor-pointer" src="./footer/twitter.png" alt="Twitter" />
                    </picture>
                </div>
                
                <div className="flex justify-center items-center m-12">
                    <picture>
                        <img className="w-24" src="./footer/segunda-chance.png" alt="" />
                    </picture>
                </div>

                <div className="flex justify-center items-center text-white">
                    <span>Desenvolvido por </span>
                    <figure><img className="w-60" src="./footer/Logo.png" alt="Logo Byron Solutions" /></figure>

                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer