"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Phone from "./../../assets/iPhone-14-Pro-Mockup2.png";
import { Header } from "../../components/Header";
import {
    Container,
    Content,
    ContentDivider,
    ContentImage,
    ContentItems,
    ContentText,
    Divider,
    Items,
    RadioButton,
    Slide,
} from "./styles";

export function Solutions() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const loaderProp = ({ src }: { src: string }) => {
        return src;
    };

    const data = [
        {
            title: "Lista de compras de supermercado",
            subTitle: "O Easy é o aplicativo ideal para quem busca organizar suas compras de maneira prática e eficiente. Crie listas detalhadas com informações como quantidade, preço, categoria e observações para cada item. Além disso, compartilhe suas listas com familiares ou amigos, facilitando a colaboração na hora de fazer compras.",
            text: "Organize suas compras com facilidade."
        },
        {
            title: "Lista de tarefas",
            subTitle: "Com o Easy, organizar suas tarefas diárias nunca foi tão simples. Crie e acompanhe atividades, defina lembretes para não perder nenhum compromisso e compartilhe suas listas com outras pessoas. Ideal para gerenciar responsabilidades em família, no trabalho ou no dia a dia, o Easy mantém você produtivo e no controle.",
            text: "Torne sua rotina mais organizada."
        },
        {
            title: "Despesas e receitas com gráficos",
            subTitle: "Tenha controle total sobre suas finanças com o Easy. Registre seus gastos fixos, como aluguel e contas, e variáveis, como supermercado e lazer. Visualize gráficos detalhados para entender melhor seus hábitos financeiros e tome decisões mais conscientes para otimizar seu orçamento.",
            text: "Controle suas finanças de forma inteligente."
        },
        {
            title: "Bloco de notas",
            subTitle: "O Easy oferece um bloco de anotações prático para registrar ideias, lembretes e informações importantes. Mantenha tudo organizado em um só lugar e acesse facilmente sempre que precisar. Seja para anotar uma tarefa ou uma inspiração, o bloco de notas do Easy é seu aliado no dia a dia.",
            text: "Guarde suas ideias e lembretes."
        },
        {
            title: "Gerenciador de assinaturas",
            subTitle: "Com o Gerenciador de Assinaturas do Easy, você organiza seus gastos com serviços como Netflix, Spotify e outros. Controle suas assinaturas em um só lugar, evitando surpresas no seu orçamento.",
            text: "Economize e alcance seus objetivos."
        }        
    ];



    const handleManualScroll = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <Container id="solutions">
            <Header />
            <Content>
                <ContentText>
                    <ContentDivider>
                        <h1 className="text-sky-950 text-sm font-sans uppercase tracking-wider">
                            Soluções
                        </h1>
                        <Divider />
                    </ContentDivider>

                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sky-950 font-medium text-xl lg:text-3xl mt-4 leading-tight">
                            {data[currentIndex].title}
                        </h2>
                        <p className="text-sky-950 mt-6 text-base font-sans leading-relaxed text-justify">
                            {data[currentIndex].subTitle}
                        </p>

                        <ContentItems>
                            <Items>
                                <p className="text-sky-950 mt-4 text-base font-sans font-semibold">
                                    {data[currentIndex].text}
                                </p>
                                <div className="flex justify-center gap-2 mt-6">
                                    {data.map((_, index) => (
                                        <RadioButton
                                            key={index}
                                            onClick={() => handleManualScroll(index)}
                                            style={{
                                                backgroundColor: currentIndex === index ? "#1e3a8a" : "#ccc",
                                            }}
                                        />
                                    ))}
                                </div>
                            </Items>
                        </ContentItems>
                    </motion.div>

                </ContentText>

                <ContentImage>
                        <Image
                            alt="iPhone exibindo o aplicativo Easy"
                            src={Phone}
                            className="drop-shadow-2xl"
                            loader={loaderProp}
                            width={270}
                        />
                </ContentImage>
            </Content>
        </Container>
    );
}
