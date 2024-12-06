"use client";


import { Container, Content, ContentDivider, Divider } from "./styles";
import "./styles";
import "animate.css";

export function About() {
    return (
        <Container id="about">
            <Content>
                <ContentDivider>
                    <Divider />
                    <h1 className="text-sky-950 text-sm font-sans uppercase tracking-wider">
                        SOBRE O APLICATIVO
                    </h1>
                    <Divider />
                </ContentDivider>
                <text className="text-sky-950 font-sans text-sm mt-4 text-justify mb-3">
                    Com o Easy, você poderá registrar todas as suas despesas, categorizando-as de maneira intuitiva e personalizada.
                    O app gera gráficos detalhados que ajudam a visualizar os padrões de consumo, facilitando a identificação de onde é possível economizar ou ajustar os gastos.
                    Além disso, o appl inclui uma lista de compras de supermercado, onde você pode armazenar os itens adquiridos ao longo do tempo, criando um histórico útil para futuras compras e ajudando a planejar o orçamento familiar de forma eficiente.
                    Também conta com uma lista de tarefas, que permite organizar os afazeres do dia a dia, também conta com histórico para não deixar você esquecer o que foi feito no passado.
                </text>
                <br />

                <text className="text-sky-950 font-sans text-sm mt-4 text-justify">
                    A funcionalidade de bloco de notas é perfeita para quem gosta de anotar lembretes e ideias, tudo em um único lugar.
                    E, para completar, o cofrinho permite que você economize de forma prática, juntando dinheiro para alcançar seus objetivos, seja uma viagem, um projeto ou simplesmente para ter uma reserva financeira.
                    Com o Easy, a gestão do seu dinheiro nunca foi tão fácil e acessível. Seja para o casal, a família ou para quem busca uma organização pessoal eficiente, o app é a ferramenta que faltava para tornar o controle financeiro mais simples e prático no seu dia a dia.
                </text>
                <ContentDivider style={{
                    marginTop: 30,
                    marginBottom: 30,
                    width: '50%'
                }}>
                    <Divider />
                </ContentDivider>

                <div className="w-2/3">
                    <h1 className=" text-sky-950 text-2xl font-sans tracking-wider text-center">
                        <span className="text-sky-950 font-bold" >
                            Use o Easy
                        </span> e Compartilhe despesas, lista de supermercado, lista de tarefas, anotações com quem você desejar.
                    </h1>
                </div>
            </Content>
        </Container>
    )
}