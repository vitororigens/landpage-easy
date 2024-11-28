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
import { Solutions } from "./Solutions";
import { Depoiments } from "./Depoiments";
import { Faq } from "./Faq";

export default function App() {


  return (
    <main >
      <Home/>
      <About/>
      <Solutions/>
      <Depoiments/>
      <Faq/>
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
