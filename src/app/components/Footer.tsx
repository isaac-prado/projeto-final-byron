"use client"

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
                
                <div className="flex items-center justify-center gap-16">
                    <picture>
                        instagram
                        <img src="" alt="" />
                    </picture>
                    <picture>
                        facebook
                        <img src="" alt="" />
                    </picture>
                    <picture>
                        youtube
                        <img src="" alt="" />
                    </picture>
                    <picture>
                        twitter
                        <img src="" alt="" />
                    </picture>
                </div>
                
                <div className="flex justify-center items-center">
                    <picture>
                        LOGO
                        <img src="" alt="" />
                    </picture>
                </div>

                <div className="flex justify-center items-center text-white">
                    <span>Desenvolvido por </span>
                    <picture><img src='' alt="Logo Byron Solutions" /></picture>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer