"use client"

const Footer = () => {

  return (
    <footer className= 'shadow-xl w-full relative bottom-0'>
        <div className='md:px-16 py-4 bg-marrom_escuro'>
            <div className="flex-col mt-4">
                <div className="grid grid-cols-3 md:flex md:justify-evenly text-center md:gap-8 mb-4 font-semibold text-white">

                    <div className="text-xl">
                        ADOTE
                        <div className="font-medium pt-2 hidden md:flex text-base justify-center">
                        <a href="../">Pesquisar Animais </a>
                        </div>
                    </div>
                    <div className="text-xl">
                        COLABORE
                        <div className="font-medium pt-2 hidden md:flex text-base justify-center">
                            Doe qualquer valor
                        </div>
                    </div>
                    <div className="text-xl">
                        DIVULGUE SEU ANIMAL
                        <div className="font-medium pt-2 hidden md:flex text-base justify-center">
                            <a href="../pages/private/doar">Cadastrar animal</a>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-xl">
                        SOBRE
                        <div className="font-medium pt-2 hidden md:flex text-base justify-center">
                            Sobre o Segunda Chance
                        </div>
                        <div className="font-medium hidden md:flex text-base justify-center">
                            Perguntas Frequentes
                        </div>
                    </div>
                    <div className="col-start-3 mt-4 md:mt-0 text-xl">
                        PERFIL
                        <div className="font-medium pt-2 hidden md:flex text-base justify-center">
                        <a href="../pages/login">Meu perfil</a>
                        </div>
                        <div className="font-medium hidden md:flex text-base justify-center">
                        <a href="../pages/signup">Cadastre-se</a>
                        </div>
                    </div>
                </div>
                
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
                        <a href="https://byronsolutions.com" target="_blank" className="cursor-pointer">
                        <figure><img className="w-60 cursor-pointer" src="./footer/Logo.png" alt="Logo Byron Solutions" /></figure>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer