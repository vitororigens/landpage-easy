import { Container, Content, LeftSide, RightSide, SidebarIcon } from "./styles";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export function NavFooter() {
    return (
        <Container className="bg-blue-950">
                <Content>
                    <LeftSide>

                        <span className="block text-sm text-white sm:text-center">
                            © 2024{" "}
                            <a href="#" className="hover:underline">
                                Easy™
                            </a>
                            . Todos direitos reservado.
                        </span>
                    </LeftSide>
                    <RightSide>

                    <SidebarIcon target="_blank" href="https://wa.me/556696315835">
                        <FaWhatsapp size={20} color="#ffffff" />
                    </SidebarIcon>
                    <SidebarIcon target="_blank" href="https://www.instagram.com/glow.app.br">
                        <FaInstagram size={20} color="#ffffff" />
                    </SidebarIcon>
                    <SidebarIcon target="_blank" href="https://www.facebook.com/profile.php?id=61566382270643">
                        <FaFacebook size={20} color="#ffffff" />
                    </SidebarIcon>
                    </RightSide>
                </Content>
        </Container>
    )
}