"use client"
import cardList from "./data"

const MainPage = () => {
  return (
    <div className="mt-20 md:p-10 p-6">
        <div className="text-center">
            <h1 className="text-2xl font-semibold">Conheça o Nosso Projeto</h1>
            <p className="pt-4 md:mx-20">Bem-vindo ao Segunda Chance! Nosso objetivo é promover a adoção responsável e encontrar lares amorosos para animais de estimação que estão ansiosos para encontrar uma família para chamarem de sua. Aqui, acreditamos que todos os animais merecem um lar seguro, cheio de amor e cuidado. Nosso site serve como um elo entre esses animais adoráveis ​​e pessoas maravilhosas, como você, que estão prontas para abrir seus corações e lares para um novo membro da família peludo.</p>
        </div>
        <div className="text-center">
            <h1 className="text-2xl font-semibold p-6">Encontre seu novo Amigo</h1>
        </div>



        <main className="container mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
                {cardList.map(card => (
                    <div className="border-2 border-gray-300 shadow-lg rounded-lg cursor-pointer bg-slate-100-100 hover:bg-slate-300 duration-300">
                        <img className="md:h-48 h-32 w-full  rounded-t-lg" src={card.img} alt=""/>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-marrom_escuro mb-2">{card.name}</h3>
                            <div className="tex-lg font-medium text-gray-800 justify-center items-start">
                                <p className="flex gap-2 mb-3"><img className="h-6" src="./footer/pin-de-localizacao.png" alt="" />{card.city}</p> 
                                <p className="flex gap-2 mb-3"><img className="h-6" src="./footer/pata-de-cachorro.png" alt="" />  {card.animal}</p> 
                                <p className="flex gap-2"><img className="h-6" src="./footer/tamanho-cachorro.png" alt="" />{card.size}</p> 
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </main>
    </div>
  )
}

export default MainPage