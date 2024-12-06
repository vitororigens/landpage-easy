import { NavFooter } from "@/components/NavFooter";
import { Container, Content, ContentItems, Items } from "./styles";
import ButtonApple from "./../../assets/button01.png";
import ButtonGoogle from "./../../assets/button02.png";
import Image from "next/image";

export function Footer() {
    return (
        <Container>
            <Content>
                <h1 className="text-sky-950 text-4xl font-sans uppercase tracking-wider">
                    Use o Easy
                </h1>
                <ContentItems>
                    <Items>

                        <text className="text-sky-950 font-sans text-sm text-justify mb-3">
                            O Easy é o aliado perfeito para simplificar o controle das suas finanças. Com ele, você acompanha seus gastos, define metas e organiza seu dinheiro de forma intuitiva e segura. Disponível para iOS e Android, é tudo o que você precisa para ter suas finanças sob controle.
                        </text>
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
                    </Items>
                    <Items>
                    <h1 className="text-sky-950 text-sm font-sans uppercase tracking-wider font-bold">
                            Navegue
                        </h1>
                        <a href="#home" className="text-purple-700 text-sm font-sans tracking-wider">
                            Home
                        </a>
                        <a href="#about" className="text-purple-700 text-sm font-sans tracking-wider">
                            Sobre o App
                        </a>
                        <a href="#solutions" className="text-purple-700 text-sm font-sans tracking-wider">
                            Soluções
                        </a>
                        <a href="#depoiments" className="text-purple-700 text-sm font-sans tracking-wider">
                            Depoimentos
                        </a>
                        <a href="#faq" className="text-purple-700 text-sm font-sans tracking-wider">
                            FAQ
                        </a>
                    </Items>
                    <Items>
                    <h1 className="text-sky-950 text-sm font-sans uppercase tracking-wider font-bold">
                            Informações de contato
                        </h1>
                        <a className="text-slate-700 text-sm font-sans tracking-wider">
                            E-Mail:
                        </a>
                        <a className="text-purple-700 text-sm font-sans tracking-wider">
                        contato@useoeasy.com.br
                        </a>
                        <a className="text-slate-700  text-sm font-sans tracking-wider">
                        Whatsapp:
                        </a>
                        <a className="text-purple-700 text-sm font-sans tracking-wider">
                        +55 66 99631-5835
                        </a>
                      
                    </Items>
                </ContentItems>
            </Content>
            <NavFooter />
        </Container>
    )
}