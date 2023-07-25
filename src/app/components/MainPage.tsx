"use client"
import cardList from "./data"

const MainPage = () => {
  return (
    <div className="mt-20 md:p-10 p-6">
        <div className="text-center">
            <h1 className="text-2xl font-semibold">Conheça o Nosso Projeto</h1>
            <p className="pt-4">Bem-vindo ao Segunda Chance! Nosso objetivo é promover a adoção responsável e encontrar lares amorosos para animais de estimação que estão ansiosos para encontrar uma família para chamarem de sua. Aqui, acreditamos que todos os animais merecem um lar seguro, cheio de amor e cuidado. Nosso site serve como um elo entre esses animais adoráveis ​​e pessoas maravilhosas, como você, que estão prontas para abrir seus corações e lares para um novo membro da família peludo.</p>
        </div>
        <div className="text-center">
            <h1 className="text-2xl font-semibold p-6">Encontre seu novo Amigo</h1>
        </div>

        <main className="container mx-auto">
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-2">
                {cardList.map(card => (
                    <div className="border-2 border-gray-300 shadow-lg rounded-lg cursor-pointer">
                        <img className="md:h-48 h-32 w-full  rounded-t-lg" src={card.img} alt=""/>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">{card.name}</h3>
                            <div className="tex-lg font-normal">
                                <p>{card.city}</p> 
                                <p>{card.animal}</p> 
                                <p>{card.size}</p> 
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