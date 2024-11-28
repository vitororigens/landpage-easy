
"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./../../assets/logo.png";
import "./styles.css";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("Home");


    const navigation = [
        { name: "Home", href: "#home" },
        { name: "Sobre o App", href: "#about" },
        { name: "Soluções", href: "#solutions" },
        { name: "Depoimentos", href: "#depoiments" },
        { name: "FAQ", href: "#faq" },
        { name: "Contato", href: "#contact" },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                setActiveNav(id.charAt(0).toUpperCase() + id.slice(1)); 
              }
            });
          },
          { threshold: 0.6 }
        );
      
        sections.forEach((section) => observer.observe(section));
      
        return () => observer.disconnect();
      }, []);
      
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                aria-label="Global"
                className="flex items-center justify-between lg:px-8 w-full max-w-screen-xl mx-auto p-4 md:py-8"
            >
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
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" color="#fff" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                       <a
                       key={item.name}
                       href={item.href}
                       onClick={() => setActiveNav(item.name)}
                       className={`text-sm font-semibold leading-6 ${
                         activeNav === item.name
                           ? "text-teal-300 border-b-2 border-teal-300"
                           : "text-white"
                       }`}
                     >
                       {item.name}
                     </a>
                     
                    ))}
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="menu-mobile fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Logo</span>
                            <Image
                                alt="Logo Easy"
                                src={Logo}
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
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" color="#fff" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-teal-300 ${
                                            activeNav === item.name
                                              ? "text-teal-300 border-b-2 border-teal-300"
                                              : "text-white"
                                          }`}
                                        
                                        onClick={() => setActiveNav(item.name)}
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
    )
}