import { Container, Content, ContentDivider, Divider, Slide, ContentSlide, HeaderSlide, BodySlide, Image, ImageContainer } from "./styles";
import Homem01 from "./../../assets/homem01.jpg";
import Homem02 from "./../../assets/homem02.jpg";
import Mulher01 from "./../../assets/mulher01.jpg";
import Mulher02 from "./../../assets/mulher02.jpg";

export function Depoiments() {
    const data = [
        {
            image: Homem01,
            name: "Camila Andrade",
            testimonial: "O Easy foi um divisor de águas para mim. Eu sempre acabava gastando mais do que devia, mas agora sei exatamente para onde meu dinheiro está indo. É incrível ver pequenas mudanças fazendo toda diferença!"
        },
        {
            image: Homem02,
            name: "Roberto Souza",
            testimonial: "Estava tentando economizar para fazer uma viagem dos sonhos, mas nunca conseguia manter o foco. Com o Easy, defini minha meta e fui acompanhando o progresso dia a dia."
        },
        {
            image: Mulher01,
            name: "Ana Martins",
            testimonial: "Antes, eu nem sabia quanto gastava em pequenos itens no dia a dia. Com os relatórios detalhados do Easy, comecei a ver um padrão e ajustei meu orçamento."
        },
        {
            image: Mulher02,
            name: "Gustavo Duarte",
            testimonial: "Eu precisava de algo que fosse fácil de usar e que me passasse segurança. No Easy, encontrei exatamente isso. O aplicativo é muito intuitivo! Já recomendei para vários amigos!"
        }
    ];

    return (
        <Container id="depoiments">
            <Content>
                <ContentDivider>
                    <Divider />
                    <h1 className="text-sky-950 text-sm font-sans uppercase tracking-wider">
                        DEPOIMENTOS
                    </h1>
                    <Divider />
                </ContentDivider>
                <ContentSlide>
                    {data.map((item, index) => (
                        <Slide key={index}>
                            <HeaderSlide>
                                <ImageContainer src={item.image} alt={item.name} />
                                <h1 className="text-sky-950 text-2xl font-sans tracking-wider text-center">
                                    {item.name}
                                </h1>
                            </HeaderSlide>
                            <BodySlide>
                                <p className="text-sky-950 font-sans text-sm mt-4 text-center">
                                    {item.testimonial}
                                </p>
                            </BodySlide>
                        </Slide>
                    ))}
                </ContentSlide>
            </Content>
        </Container>
    );
}
