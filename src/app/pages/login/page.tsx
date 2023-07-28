"use client"
import Link from 'next/link'
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function Login( {username} ) {
    return (
        <>
          <Nav/>
          <div className="flex flex-col space-y-4 px-4 py-8 sm:px-5 justify-center h-screen items-center border rounded bg-cinza"> 
            <h2 className="text-marrom_escuro text-4xl">Faça seu login</h2>
              <form action='./private/inicial' method='POST'>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-600 text-xl"
                    >
                      Email:
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="exemplo@exemplo.com.br"
                      autoComplete="email"
                      required
                      className="my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-gray-600 text-xl"
                    >
                      Senha:
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                    />
                  </div>
                  <input type="submit" value="Entrar" className=" text-xl flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none border-rosa bg-rosa text-black hover:bg-white hover:text-rosa"/>
                  <p className="my-5 text-center text-xl text-gray-600">Ainda não possui uma conta?{" "}<Link href="./pages/signup" className="font-semibold text-gray-800">Cadastre-se</Link>{" "}Agora </p>
              </form>
          </div>
          <Footer/>
          </>
    );
}
