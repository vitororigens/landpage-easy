"use client";

import Phone from "./../../assets/iPhone-14-Pro-Mockup.png";
import ButtonApple from "./../../assets/button01.png";
import ButtonGoogle from "./../../assets/button02.png";
import "./styles.ts";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../Header";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Container, ContentDivider, Divider } from "./styles";

export function About() {
    return (
        <Container id="about">
            <ContentDivider>
                <Divider />
                <h1 className="text-sky-950 text-sm font-sans uppercase tracking-wider">
                    SOBRE O APLICATIVO
                </h1>
                <Divider />
            </ContentDivider>
            <text className="text-sky-950 font-sans text-sm mt-4 text-justify">
                Gerenciar suas finanças pessoais nunca foi tão fácil. Nosso aplicativo foi desenvolvido para ser seu aliado financeiro, proporcionando controle, segurança e simplicidade. Através de uma interface moderna e intuitiva, o aplicativo coloca você no comando, oferecendo uma visão clara dos seus gastos, metas financeiras e progresso ao longo do tempo. <br />


                O Easy organiza cada detalhe das suas finanças de forma prática e eficiente, trazendo funcionalidades como acompanhamento em tempo real, alertas de gastos, planejamento de metas e relatórios personalizados. Seja você um iniciante em finanças ou alguém que busca mais controle sobre seu orçamento, a plataforma tornará cada passo muito mais fácil.
            </text>
            <ContentDivider style={{
                marginTop: 30,
                width: '50%'
            }}>
                <Divider />
            </ContentDivider>

            <h1 className=" text-sky-950 text-2xl font-sans tracking-wider text-center">
                <span className="text-sky-950 font-bold" >
                Use o Easy
                    </span> e descubra uma maneira muito mais prática de gerenciar seu dinheiro!
            </h1>
        </Container>
    )
}