"use client";

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './../assets/logo.png';
import Personagem01 from './../assets/personagem01.svg';
import Personagem02 from './../assets/homem-vestindo-camiseta-gesticulando 1.png';
import ButtonApple from './../assets/button01.png';
import ButtonGoogle from './../assets/button02.png';
import Phone from './../assets/phone.png';
import './styles.css';
import 'animate.css';
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'O Easy', href: '#o-easy' },
    { name: 'Baixar', href: '#baixar' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <main>
      <div className='bg-violet-300' id="home">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between lg:px-8 w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  alt="Logo Easy"
                  src={Logo}
                  width={150}
                  height={50}
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image
                    alt=""
                    src="https://tailwindui.com/Image/logos/mark.svg?color=indigo&shade=600"
                    width={150}
                    height={50}
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        <div className='flex flex-col lg:flex-row mt-10 lg:mt-20 justify-between items-center px-20'>
          <div className='flex justify-center items-center p-20 w-full lg:w-1/2'>
            <motion.div
              whileHover={{ scale: [null, 1.3, 1.2] }}
              transition={{ duration: 0.3 }}
            >
              <p className='animate__animated animate__fadeInLeft font-normal text-center lg:text-left text-3xl text-white'>
                O App perfeito para
                <br />
                <span className='font-bold text-4xl'>
                  gerenciar sua vida
                  Financeira e <br />
                  seu dia a dia.
                </span>
              </p>
            </motion.div>
          </div>
          <div className='flex justify-center items-end mt-10 lg:mt-0 w-full lg:w-1/2'>
            <Image
              alt="Personagem segurando celular com tela do Easy"
              src={Personagem01}
              width={2032}
              height={1842}
              className="sm:w-[50rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
      <div id="o-easy">
        <div className='flex flex-col lg:flex-row mt-20 justify-between items-center px-5 lg:px-20'>
          <div className='flex justify-center items-center mt-10 lg:mt-0'>
            <motion.div
              whileHover={{ scale: [null, 1.3, 1.2] }}
              transition={{ duration: 0.3 }}
            >
              <Image
                alt="Telefone com a tela do Easy"
                src={Phone}
                width={600}
                height={800}
              />
            </motion.div>
          </div>
          <div className='flex flex-col justify-center items-center p-5 lg:p-20 w-full lg:w-1/2'>
            <motion.div
              whileHover={{ scale: [null, 1.3, 1.2] }}
              transition={{ duration: 0.3 }}
            >
              <p className='animate__animated animate__fadeInRight font-bold text-center lg:text-left  text-4xl text-black m-10'>
                Você no controle
                da sua Vida.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: [null, 1.3, 1.2] }}
              transition={{ duration: 0.3 }}
            >
              <p className='animate__animated animate__fadeInRight text-base text-center lg:text-left '>
                Com o Easy, você terá total controle sobre sua vida financeira.<br />
                Crie notas rápidas para anotar informações importantes,<br />
                mantenha listas de tarefas para nunca esquecer seus<br />
                compromissos e gerencie suas despesas com nosso mercado,<br />
                controlando seus gastos mensais. Além disso, acompanhe seu<br />
                desenvolvimento financeiro com gráficos detalhados e intuitivos.<br />
                Simplifique sua vida e alcance suas metas com o Easy!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='bg-teal-200' id="baixar">
        <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:px-20 mt-20'>
          <div className='flex flex-col justify-center items-center p-10 lg:p-20 w-full lg:w-1/2'>
            <motion.div
              whileHover={{ scale: [null, 1.3, 1.2] }}
              transition={{ duration: 0.3 }}
            >
              <p className='font-normal text-center text-3xl text-black'>
                <span className='animate__animated animate__fadeIn font-bold text-4xl'>
                  Facil, Rapido <br />
                  e Gratuito.
                </span>
                <br />
                Baixe agora nas
                lojas oficiais
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
            <div className='flex flex-col lg:flex-row'>
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
          <div className='flex justify-center items-end mt-10 lg:mt-0 self-end'>
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
      <div className='flex flex-col lg:flex-row items-center justify-center p-5  lg:p-20 w-full' id="contato">
        <div className='flex flex-col justify-center items-center p-10 lg:p-20 w-full lg:w-1/2'>
          <motion.div
            whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }}
          >
            <p className='animate__animated animate__fadeIn font-bold text-2xl lg:text-4xl text-black text-center'>
              Fique por dentro <br />
              das novidades
            </p>
          </motion.div>
        </div>
        <div className='flex flex-col lg:flex-row m-10 w-full justify-between items-center lg:w-1/2'>
          <label htmlFor="email" className="sr-only">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" required className="w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 mb-4 lg:mb-0" placeholder="E-mail" />
          <button className="w-full rounded-md py-2 px-4 bg-violet-300 text-white">
            Inscrever-se
          </button>
        </div>
      </div>
      <footer className="shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
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
                <a href="#home" className="hover:underline me-4 md:me-6">Home</a>
              </li>
              <li>
                <a href="#o-easy" className="hover:underline me-4 md:me-6">O Easy</a>
              </li>
              <li>
                <a href="#baixar" className="hover:underline me-4 md:me-6">Baixar</a>
              </li>
              <li>
                <a href="#contato" className="hover:underline">Contato</a>
              </li>
              <li>
                <a href="#privacy-policy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Easy™</a>. Todos direitos reservado.</span>
        </div>
      </footer>
    </main>
  );
}
