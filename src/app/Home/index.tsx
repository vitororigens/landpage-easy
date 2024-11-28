"use client";

import Phone from "./../../assets/iPhone-14-Pro-Mockup.png";
import ButtonApple from "./../../assets/button01.png";
import ButtonGoogle from "./../../assets/button02.png";
import "./styles.module.ts";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../Header";
import { Container, Content, ContentDivider, ContentIconArrow, ContentImage, ContentLeft, ContentRight, ContentText, Divider, SidebarIcon } from "./styles.module";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


export function Home() {
    return (
        <Container id="home" >
            <Header />
            <Content>
                <ContentLeft>
                    <ContentText>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ContentDivider>
                            <h1 className="text-white text-sm font-sans uppercase tracking-wider">
                                Use o Easy
                            </h1>
                            <Divider/>
                            </ContentDivider>
                            <h2 className="text-white font-medium text-2xl lg:text-5xl mt-4 leading-tight">
                                Controle suas <br />
                                finanças de forma <br />
                                <span className="text-teal-300">prática e segura</span>
                            </h2>
                            <p className="text-white  mt-6 text-base font-sans leading-relaxed">
                                Com o Easy, você acompanha seus gastos, define metas e organiza seu dinheiro de
                                forma fácil. Com uma interface intuitiva e ferramentas poderosas, ajudamos você a
                                manter o controle do dinheiro em cada etapa da sua jornada financeira.
                            </p>
                            <div className="flex justify-center lg:justify-start gap-4 mt-8">
                                <a>
                                    <Image
                                        src={ButtonApple}
                                        alt="App Store"
                                        width={150}
                                        height={50}
                                        className="inline-block mr-2"
                                    />
                                </a>
                                <a>
                                    <Image
                                        src={ButtonGoogle}
                                        alt="Google Play"
                                        width={150}
                                        height={50}
                                        className="inline-block mr-2"
                                    />

                                </a>
                            </div>
                        </motion.div>

                    </ContentText>

                    <ContentImage>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                alt="iPhone exibindo o aplicativo Easy"
                                src={Phone}
                                width={900}
                                height={900}
                                className="drop-shadow-2xl"
                            />
                        </motion.div>
                    </ContentImage>

                </ContentLeft>
                <ContentRight>
                    <SidebarIcon>
                        <FaWhatsapp size={20} color="#ffffff" />
                    </SidebarIcon>
                    <SidebarIcon>
                        <FaInstagram size={20} color="#ffffff" />
                    </SidebarIcon>
                    <SidebarIcon>
                        <FaFacebook size={20} color="#ffffff" />
                    </SidebarIcon>
                    <SidebarIcon>
                        <FaLinkedin size={20} color="#ffffff" />
                    </SidebarIcon>
                </ContentRight>
            </Content>
            <ContentIconArrow>
            <IoIosArrowDown size={90} color="#ffffff" />
            </ContentIconArrow>
        </Container>
    );
}
