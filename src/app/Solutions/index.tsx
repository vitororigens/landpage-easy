"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Phone from "./../../assets/iPhone-14-Pro-Mockup2.png";
import { Header } from "../Header";
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

    const data = [
        {
            title: "Monitoramento em Tempo Real",
            subTitle: "Tenha uma visão clara e instantânea de todos os seus gastos e receitas. Use o Easy para acompanhar cada transação à medida que ela ocorre, facilitando o controle diário das suas finanças e ajudando você a se manter dentro do seu orçamento.",
            text: "Cada centavo no seu radar, a qualquer hora."
        },
        {
            title: "Definição de Metas Financeiras",
            subTitle: "Trace metas personalizadas e acompanhe seu progresso. Seja para poupar para uma viagem, quitar dívidas ou apenas aumentar sua reserva de emergência, o Easy ajuda você a visualizar e atingir seus objetivos de forma prática e motivadora.",
            text: "Trace metas, acompanhe seu progresso e realize seus sonhos."
        },
        {
            title: "Relatórios Detalhados e Insights",
            subTitle: "Descubra para onde seu dinheiro está indo. Com relatórios gráficos e insights personalizados, o Easy oferece uma análise detalhada dos seus hábitos de consumo, permitindo que você tome decisões mais inteligentes e planeje melhor seu orçamento.",
            text: "Entenda seus gastos e faça seu dinheiro trabalhar para você."
        },
        {
            title: "Alertas de Gastos e Notificações",
            subTitle: "Nunca mais se surpreenda com os gastos. Receba alertas personalizados para acompanhar de perto seus gastos e evitar excessos. Com o Easy, você define limites de gastos e recebe notificações quando estiver se aproximando deles, mantendo o controle em todas as situações.",
            text: "Seus gastos sob controle, com alertas que te mantêm informado."
        },
        {
            title: "Personalização Completa",
            subTitle: "O Easy se adapta a você! Organize categorias de gastos, personalize seu painel e ajuste as funcionalidades para criar uma experiência única e sob medida para suas necessidades financeiras.",
            text: "Um app que se adapta ao seu estilo financeiro."
        },
        {
            title: "Lista de Compras",
            subTitle: "Organize suas compras e mantenha-se dentro do orçamento! Com a funcionalidade de lista de compras do Easy, você planeja suas compras de forma prática, adiciona itens com facilidade e monitora os gastos enquanto faz compras. Além disso, visualize o total estimado em tempo real para que cada ida ao mercado se encaixe nas suas metas financeiras.",
            text: "Planeje suas compras e economize de verdade."
        }
    ];


    const handleManualScroll = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000);

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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            alt="iPhone exibindo o aplicativo Easy"
                            src={Phone}
                            width={400}
                            height={400}
                            className="drop-shadow-2xl"
                        />
                    </motion.div>
                </ContentImage>
            </Content>
        </Container>
    );
}
