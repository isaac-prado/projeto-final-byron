"use client"
import { useState } from "react"
import Modal from "../components/Modal"

const Pets = () => {
    const [ openModal, setOpenModal ] = useState(false)

    return (
        <div className="mt-28 md:mx-20 m-6">
            <div className="flex-col w-full">
                <div className="md:grid md:grid-cols-3">
                    <div className="text-center md:text-left md:col-start-2 md:col-span-2">
                        <div>
                            <div className="text-3xl font-bold text-marrom_escuro md:col-start-2">
                                MINGAU
                            </div>
                            <div className="text-lg text-marrom_claro">
                                Gato | Macho | Porte Pequeno
                            </div>
                        </div>
                        <div className="font-bold pt-5">
                            <div>
                                <p className="flex gap-2"><img src="./footer/pin-de-localizacao.png" alt="Pin de localização" />Maria da Fé, MG</p>
                            </div>
                            <div className="mt-2 ml-1">
                                <p className="flex gap-2"><img src="./footer/homem-usuario.png" alt="Usuário que publicou" />Publicado por Solidaripatas</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-start-1 md:mr-8">
                        <div className="items-center justify-center mt-4 mb-2">
                            <img className="w-full rounded-md" src="./images/mingau.jpeg" alt="" />
                        </div>
                        <div className="grid grid-cols-3 items-center justify-center">
                            <picture><img className="rounded-md" src="./images/mingau.jpeg" alt="" /></picture>
                            <img className="rounded-md" src="./images/mingau.jpeg" alt="" />
                            <img className="rounded-md" src="./images/mingau.jpeg" alt="" />
                            <img className="rounded-md" src="./images/mingau.jpeg" alt="" />
                        </div>
                    </div>

                    <div className="text-center md:text-left md:mt-12 mt-4 md:col-span-2">
                        <p className="text-2xl font-semibold text-marrom_escuro md:mb-4">A história do Mingau</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos harum sunt cupiditate enim quo debitis ipsam sit magnam illum tempora, vitae, ipsa doloremque delectus expedita obcaecati. Odit, voluptate esse nesciunt sint cum, nemo temporibus error officiis dolore sapiente harum repellendus? Fugit doloribus et doloremque, fuga repellendus eum consectetur eligendi quis aliquid molestiae vitae ea officia, repudiandae in autem, velit similique? Error, unde enim. Obcaecati facere odio est ab! Totam, quia? Quo illo sunt optio, tenetur dolorem architecto possimus labore nostrum. Et similique veritatis, quaerat esse dicta qui magnam commodi aperiam quia reiciendis ullam minus nobis eos dolorum facilis hic obcaecati a dolorem, suscipit at? Cum id quisquam, laudantium maxime perspiciatis deserunt minima totam possimus, eligendi odio iste assumenda neque hic alias non vel, velit voluptate corrupti quaerat eaque sit similique placeat nostrum! Quae, laudantium libero assumenda odit veniam vero distinctio. Ipsa itaque error cumque animi dignissimos ipsam perferendis consequuntur veritatis eum molestiae nihil sint praesentium, blanditiis nostrum repudiandae obcaecati, magni officiis similique tempora? Ratione ut quaerat voluptate cum ullam. Sequi eveniet rerum sit eius praesentium deleniti, a vitae tempora debitis unde tempore voluptate, ipsam cum cupiditate explicabo sint quia commodi facilis hic. Fuga quis ad consequatur repudiandae asperiores in quos voluptate illo cupiditate placeat, reprehenderit esse maiores labore pariatur numquam velit? Nobis, tempore porro vero consequuntur qui, ullam voluptas modi voluptates, rerum sed illum maxime voluptatem. Sed, corrupti. Cum nostrum eaque culpa aperiam voluptatibus doloribus eos officiis! Quod placeat tempora corrupti ipsum tenetur et aut earum, ullam, praesentium iure, ex odit laborum? Ratione consequatur tenetur unde, labore modi quidem adipisci quo, voluptates nisi similique itaque quaerat debitis autem corrupti, porro numquam cum iste quas maxime dolores? Quidem ipsum doloribus molestiae enim beatae quis voluptatem sequi, molestias cupiditate ipsam maxime modi harum quia pariatur earum porro aliquid amet blanditiis necessitatibus consequatur?</p>
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
                                <p className="mt-4 flex gap-2"><img src="./footer/whatsapp.png" alt="" />(xx)xxxx-xxxx</p>
                                <p className="flex gap-2"><img src="./footer/email.png" alt="" />email@email.com</p>
                            </div>
                        </Modal>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pets