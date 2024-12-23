import { Container, Content, ContentDivider, Divider, ImageContainer, ColumnRight, ColumnLeft, ContentItems, Items, ContainerItems } from "./styles";
import Image01 from "./../../assets/O6fm1WN3H.png";
import { TbChartInfographic } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";



export function Depoiments() {


    return (
        <Container id="depoiments">
            <ContainerItems>
                <ContentDivider>
                    <Divider />
                    <h1 className="text-sky-950 text-sm font-sans uppercase tracking-wider">
                        Recursos
                    </h1>
                    <Divider />
                </ContentDivider>
                <Content>
                    <ColumnLeft>
                        <h1 className="text-sky-950 text-3xl font-sans text-center uppercase tracking-wider">
                            Total controle de gastos na palma da sua mão
                        </h1>
                        <ImageContainer src={Image01} alt="Mulher analisando suas finanças no celular" />
                    </ColumnLeft>
                    <ColumnRight>
                        <ContentItems>
                            <TbChartInfographic size={40} color="#1E3A8A" />
                            <Items>
                                <h1 className="text-sky-950 text-xl font-sans uppercase tracking-wider">
                                    Controle suas contas
                                </h1>
                                <p className="text-sky-950 text-sm font-sans">
                                    Tenha total controle de seus gastos, com gráficos e relatórios detalhados.
                                </p>
                            </Items>
                        </ContentItems>
                        <ContentItems>
                            <AiOutlineDollar size={40} color="#1E3A8A" />
                            <Items>
                                <h1 className="text-sky-950 text-xl font-sans uppercase tracking-wider">
                                    Tenha diversas ferramentas
                                </h1>
                                <p className="text-sky-950 text-sm font-sans">
                                    Lista de mercado, lista de tarefas, notas e muito mais.
                                </p>
                            </Items>
                        </ContentItems>
                        <ContentItems>
                            <FaChartPie size={40} color="#1E3A8A" />
                            <Items>
                                <h1 className="text-sky-950 text-xl font-sans uppercase tracking-wider">
                                    Acompanhe seu desempenho
                                </h1>
                                <p className="text-sky-950 text-sm font-sans">

                                    Entenda sua economia mensal, descubra como você se saiu e tenha acesso a gráficos e relatórios

                                </p>
                            </Items>
                        </ContentItems>
                    </ColumnRight>
                </Content>
            </ContainerItems>
        </Container>
    );
}
