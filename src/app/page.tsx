"use client";

import Logo from "./../assets/logo.png";
import Personagem02 from "./../assets/homem-vestindo-camiseta-gesticulando 1.png";
import ButtonApple from "./../assets/button01.png";
import ButtonGoogle from "./../assets/button02.png";
import Phone from "./../assets/phone.png";
import "./styles.css";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { Home } from "./Home";
import { About } from "./About";

export default function App() {


  return (
    <main >
      <Home/>
      <About/>
      <div className="bg-teal-200" id="baixar">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:px-20 mt-20">
          <div className="flex flex-col justify-center items-center p-10 lg:p-20 w-full lg:w-1/2">
            <motion.div
              whileHover={{ scale: [null, 1.3, 1.2] }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-normal text-center text-3xl text-black">
                <span className="animate__animated animate__fadeIn font-bold text-4xl">
                  Facil, Rapido <br />e Gratuito.
                </span>
                <br />
                Baixe agora nas lojas oficiais
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: [null, 1.3, 1.2] }}
              transition={{ duration: 0.3 }}
            >
              <Image
                alt="Logo Easy"
                src={Logo}
                width={150}
                height={50}
                className="w-full max-w-[150px] m-10"
              />
            </motion.div>
            <div className="flex flex-col lg:flex-row">
              <motion.div
                whileHover={{ scale: [null, 1.3, 1.2] }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  alt="Botão de acesso a loja Apple"
                  src={ButtonApple}
                  width={150}
                  height={50}
                  className="w-[150px] m-5"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1.3, 1.2] }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  alt="Botão de acesso a loja Google"
                  src={ButtonGoogle}
                  width={150}
                  height={50}
                  className="w-[150px] m-5"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center items-end mt-10 lg:mt-0 self-end">
            <Image
              alt="Pessoa segurando um celular"
              src={Personagem02}
              width={600}
              height={600}
              className="w-full max-w-[600px]"
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row items-center justify-center p-5  lg:p-20 w-full"
        id="contato"
      >
        <div className="flex flex-col justify-center items-center p-10 lg:p-20 w-full lg:w-1/2">
          <motion.div
            whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }}
          >
            <p className="animate__animated animate__fadeIn font-bold text-2xl lg:text-4xl text-black text-center">
              Fique por dentro <br />
              das novidades
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row m-10 w-full justify-between items-center lg:w-1/2">
          <label htmlFor="email" className="sr-only">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 mb-4 lg:mb-0"
            placeholder="E-mail"
          />
          <button className="w-full rounded-md py-2 px-4 bg-violet-300 text-white">
            Inscrever-se
          </button>
        </div>
      </div>
      <footer className="shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#home"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image
                alt="Logo Easy"
                src={Logo}
                width={150}
                height={50}
                className="h-8 w-auto"
              />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
              <li>
                <a href="#home" className="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
              <li>
                <a href="#o-easy" className="hover:underline me-4 md:me-6">
                  O Easy
                </a>
              </li>
              <li>
                <a href="#baixar" className="hover:underline me-4 md:me-6">
                  Baixar
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:underline">
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#privacy-policy"
                  className="hover:underline me-4 md:me-6"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Easy™
            </a>
            . Todos direitos reservado.
          </span>
        </div>
      </footer>
    </main>
  );
}
