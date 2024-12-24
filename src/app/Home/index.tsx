"use client";

import Phone from "./../../assets/iPhone-14-Pro-Mockup.png";
import ButtonApple from "./../../assets/button01.png";
import ButtonGoogle from "./../../assets/button02.png";
import "./styles";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../../components/Header";
import { Container, Content, ContentDivider, ContentIconArrow, ContentImage, ContentLeft, ContentRight, ContentText, Divider, SidebarIcon } from "./styles";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


export function Home() {
    const loaderProp = ({ src }: { src: string }) => {
        return src;
    };
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
                                    Easy Finanças Pessoais
                                </h1>
                                <Divider />
                            </ContentDivider>
                            <h2 className="text-white font-medium text-2xl lg:text-5xl mt-4 leading-tight">

                                <span className="text-teal-300">Easy</span> muito além
                                <br /> de um simples controle financeiro.
                            </h2>
                            <p className="text-white  mt-6 text-base font-sans leading-relaxed">
                            O Easy é o app ideal para organizar suas finanças pessoais. Perfeito para casais e famílias, ele simplifica o controle do orçamento e dos gastos, 
                            além de oferecer recursos como lista de compras, tarefas, bloco de notas e compartilhamento de todas as funções.
                            </p>
                            <div className="flex justify-center lg:justify-start gap-4 mt-8">
                                <a>
                                    <Image
                                        loader={loaderProp}
                                        src={ButtonApple}
                                        alt="App Store"
                                        width={150}
                                        height={50}
                                        className="inline-block mr-2"
                                    />
                                </a>
                                <a>
                                    <Image
                                        loader={loaderProp}
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
                                loader={loaderProp}
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
                    <SidebarIcon target="_blank" href="https://wa.me/556696315835">
                        <FaWhatsapp size={20} color="#ffffff" />
                    </SidebarIcon>
                    <SidebarIcon target="_blank" href="https://www.instagram.com/useoeasy/profilecard/?igsh=MXZqM3NncWk5djk1eA==">
                        <FaInstagram size={20} color="#ffffff" />
                    </SidebarIcon>
                    <SidebarIcon target="_blank" href="https://www.facebook.com/share/19Uo4H1V9K/">
                        <FaFacebook size={20} color="#ffffff" />
                    </SidebarIcon>
                </ContentRight>
            </Content>
            <ContentIconArrow>
                <IoIosArrowDown size={90} color="#ffffff" />
            </ContentIconArrow>
        </Container>
    );
}
