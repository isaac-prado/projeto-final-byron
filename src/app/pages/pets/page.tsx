"use client"
import { useState } from "react"
import Modal from "../../components/Modal"

const Pets = () => {
    const [ openModal, setOpenModal ] = useState(false)

    return (
        <div className="mt-28 md:mx-20 m-6">
            <div className="flex-col w-full">
                <div className="md:grid md:grid-cols-3">
                    <div className="text-center md:text-left md:col-start-2 md:col-span-2">
                        <div>
                            <div className="text-3xl font-bold text-marrom_escuro md:col-start-2">
                                AURÉLIO
                            </div>
                            <div className="text-lg text-marrom_claro">
                                Cachorro | Macho | Filhote | Porte Pequeno
                            </div>
                        </div>
                        <div className="font-bold pt-5">
                            <div>
                                <p className="flex gap-2"><img src="./footer/pin-de-localizacao.png" alt="Pin de localização" />Itajubá, MG</p>
                            </div>
                            <div className="mt-2 ml-1">
                                <p className="flex gap-2"><img src="./footer/homem-usuario.png" alt="Usuário que publicou" />Publicado por Solidaripatas</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-start-1 md:mr-8">
                        <div className="items-center justify-center mt-4">
                            <img className="w-full rounded-md" src="./images/dog3.jpeg" alt="" />
                        </div>
                        <div className="grid grid-cols-3 items-center justify-center">
                            <picture><img className="rounded-md" src="./images/dog3.jpeg" alt="" /></picture>
                            <img className="rounded-md" src="./images/dog3.jpeg" alt="" />
                            <img className="rounded-md" src="./images/dog3.jpeg" alt="" />
                            <img className="rounded-md" src="./images/dog3.jpeg" alt="" />
                        </div>
                    </div>

                    <div className="text-center md:text-left md:mt-12 mt-4 md:col-span-2">
                        <p className="text-2xl font-semibold text-marrom_escuro md:mb-4">A história do Aurélio</p>
                        <p>Aurelio é um cão de porte médio com uma pelagem caramelo brilhante e olhos expressivos que irão derreter seu coração. Ele foi resgatado das ruas e acolhido em um abrigo, onde mostrou uma personalidade brincalhona e afetuosa desde o início. Com aproximadamente dois anos de idade, Aurelio é um companheiro animado e energético. Ele adora correr, brincar com uma bola e explorar o mundo ao seu redor. Seu espírito aventureiro vai te inspirar a aproveitar a vida ao máximo. Aurelio também é um cachorro extremamente inteligente e aprende com rapidez. Ele está ansioso para encontrar um dono dedicado que possa continuar a estimular sua mente ágil e ensinar truques divertidos. Com amor e paciência, Aurelio tem todo o potencial para se tornar um companheiro leal e obediente.</p>
                    </div>

                    <div className="md:col-start-2">
                        <div className="text-center font-semibold mt-4">
                            <button onClick={() => setOpenModal(true)} className="text-2xl bg-red-300 py-4 px-7 mt-6 rounded-lg shadow-lg">
                                QUERO ADOTAR
                            </button>
                        </div>
                        <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}>
                            <div className="flex-col items-center text-center gap-4 font-bold">
                                <h2 className="text-3xl mb-4">Quer Adotar?</h2>
                                <p>Para adotar esse pet ou saber mais sobre ele, entre em contato com o dono:</p>
                                <p className="mt-4"><img src="./footer/whatsapp.png" alt="" />(xx)xxxx-xxxx</p>
                                <p><img src="./footer/email.png" alt="" />email@email.com</p>
                            </div>
                        </Modal>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pets