import { Container, Content, LeftSide, RightSide, SidebarIcon } from "./styles.module";
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

                    <SidebarIcon>
                        <FaWhatsapp size={20} color="#ffffff" />
                    </SidebarIcon>
                    <SidebarIcon>
                        <FaInstagram size={20} color="#ffffff" />
                    </SidebarIcon>
                    <SidebarIcon>
                        <FaFacebook size={20} color="#ffffff" />
                    </SidebarIcon>
                    <SidebarIcon>
                        <FaLinkedin size={20} color="#ffffff" />
                    </SidebarIcon>
                    </RightSide>
                </Content>
        </Container>
    )
}