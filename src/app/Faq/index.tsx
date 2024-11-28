"use client";

import { useState } from "react";
import {
    Container,
    Content,
    ContentDivider,
    Divider,
    AccordionButton,
    AccordionBody,
} from "./styles";

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "O aplicativo Easy é gratuito?",
            answer: "Sim, o Easy é gratuito com funcionalidades essenciais e uma experiência completa de gestão financeira.",
        },
        {
            question: "Posso usar o aplicativo em mais de um dispositivo?",
            answer: "Sim! Basta fazer login com sua conta em qualquer dispositivo iOS ou Android para acessar seus dados sincronizados automaticamente.",
        },
        {
            question: "O Easy envia notificações sobre os meus gastos?",
            answer: "Sim, o app envia notificações personalizáveis para ajudá-lo a acompanhar sua contas.",
        },
        {
            question: "Como a lista de compras funciona?",
            answer: "A lista de compras permite que você adicione itens e acompanhe o custo estimado em tempo real. É uma maneira prática de planejar suas compras e garantir que você fique dentro do orçamento.",
        },
        {
            question: "O Easy funciona offline?",
            answer: "Sim, você pode acessar e visualizar seus dados offline. No entanto, algumas funcionalidades requerem uma conexão com a internet.",
        },
        {
            question: "Como posso entrar em contato com o suporte?",
            answer: "Nosso time de suporte está pronto para ajudar! Você pode entrar em contato conosco diretamente pelo app, na seção de Ajuda, ou enviar um e-mail para nossa equipe de atendimento.",
        },
    ];

    return (
        <Container>
            <Content>
                <ContentDivider>
                    <Divider />
                    <h1 className="text-white text-sm font-sans uppercase tracking-wider">
                        PERGUNTAS FREQUENTES
                    </h1>
                    <Divider />
                </ContentDivider>

                {faqItems.map((item, index) => (
                    <div key={index}>
                        <AccordionButton
                            onClick={() => toggleAccordion(index)}
                            className={openIndex === index ? "active" : ""}
                        >
                            <span>{item.question}</span>
                            <svg
                                width="20"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </AccordionButton>
                        <AccordionBody open={openIndex === index}>
                            {item.answer}
                        </AccordionBody>
                    </div>
                ))}
            </Content>
        </Container>
    );
}
