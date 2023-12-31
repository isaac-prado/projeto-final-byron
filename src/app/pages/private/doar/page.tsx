
"use client"
import DataButtons from '../../../components/DataButtons';
import LocationSelect from '../../../components/LocationSelect';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import Modal from "../../../components/Modal"
import { useState } from "react"

const Doar = () => {
  const [ openModal, setOpenModal ] = useState(false)

  return (
    <>
    <div className="mt-14 xl:m-72 md:m-36 flex flex-col mt-20 md:p-10 p-6 justify-center items-center border rounded bg-cinza"> 
          <h2 className="text-marrom_escuro text-4xl">Cadastre um pet para adoção</h2>
            <form action='/api/login' method='POST'>
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-xl text-gray-600"
                  >
                    Nome do bichinho:
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="nome"
                    autoComplete="nome"
                    required
                    className="my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  />
                </div>
                <div className="inline-flex items-baseline my-5 mt-1 block w-full">
                  <label
                    htmlFor="especie"
                    className="block text-xl text-gray-600 me-5"
                  >
                    Espécie:
                  </label>
                  <input
                    id="especie"
                    name="especie"
                    type="especie"
                    required
                    className="my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  />
                  <label
                    htmlFor="sexo"
                    className="block text-xl text-gray-600 mx-5"
                  >
                    Sexo:
                  </label>
                  <select id="sexo"
                    name="sexo"
                    required
                    className="bg-white my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm">
                    <option value="macho">Macho</option>
                    <option value="femea">Fêmea</option>
                  </select>
                </div>
                <div className="inline-flex items-baseline my-5 mt-1 block w-full">
                  <label
                    htmlFor="idade"
                    className="block text-xl text-gray-600 me-5"
                  >
                    Idade:
                  </label>
                  <input
                    id="idade"
                    name="idade"
                    type="idade"
                    required
                    className="my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  />
                  <label
                    htmlFor="porte"
                    className="block text-xl text-gray-600 mx-5"
                  >
                    Porte:
                  </label>
                  <select id="porte"
                    name="porte"
                    required
                    className="bg-white my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm">
                    <option value="grande">Grande</option>
                    <option value="medio">Medio</option>
                    <option value="pequeno">Pequeno</option>
                  </select>
                </div>
                <LocationSelect/>
                <div>
                  <label
                    htmlFor="texto"
                    className="block text-xl text-gray-600"
                  >
                    Conte a história do animal:
                  </label>
                  <textarea
                    id="texto"
                    name="texto"
                    required
                    className="my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  />
                </div>
                <div className="inline-flex items-baseline my-5 mt-1 block w-full">
                  <label
                    htmlFor="foto"
                    className="block text-xl text-gray-600 me-5"
                  >
                    Foto principal:
                  </label>
                  <input
                    id="foto"
                    name="foto"
                    type="file"
                    required
                    className="my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  />
                  <label
                    htmlFor="foto"
                    className="block text-xl text-gray-600 mx-5"
                  >
                    Outras fotos:
                  </label>
                  <input
                    id="foto"
                    name="foto"
                    type="file"
                    required
                    className="my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  />
                </div>
                <DataButtons/>
                <div className="md:col-start-2">
                        <div className="text-center font-semibold mt-4">
                            <button onClick={() => setOpenModal(true)} className="text-xl flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none border-marrom_escuro bg-marrom_escuro text-white hover:bg-white hover:text-marrom_escuro">
                                Salvar
                            </button>
                        </div>
                        <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}>
                            <div className="flex-col items-center text-center gap-4 font-bold">
                                <h2 className="text-3xl mb-4">Seu pet foi cadastrado</h2>
                                <p>Esses são seus dados de contatpo cadastrados que as pessoas verão:</p>
                                <p className="mt-4 flex gap-2"><img src="./footer/whatsapp.png" alt="" />(xx)xxxx-xxxx</p>
                                <p className="flex gap-2"><img src="./footer/email.png" alt="" />email@email.com</p>
                            </div>
                        </Modal>
                    </div>                </form>
        </div>
    </>
    
)
}
export default Doar