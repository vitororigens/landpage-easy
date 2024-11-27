import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background: radial-gradient(circle at top left, #340e56, transparent 60%), 
                radial-gradient(circle at bottom right, #361375, transparent 60%), 
                linear-gradient(to right, #6a0dad, #361375);
    background-blend-mode: overlay; 
    height: 100vh;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        height: auto; 
        padding: 20px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 40px;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 20px;
        height: auto;
    }
`;

export const ContentLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media (max-width: 768px) {
        margin-bottom: 20px; 
    }
`;

export const ContentText = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%; 
    }
`;

export const ContentImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 20px; 
        display: none;
    }
`;

export const ContentRight = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
        height: auto; 
    }
`;

export const SidebarIcon = styled.a`
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
`;

export const ContentIconArrow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    position: absolute;
    bottom: 0;

    @media (max-width: 768px) {
        height: 60px; 
    }
`;

export const ContentDivider = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Divider = styled.div`
    flex: 1;
    margin-left: 10px;
    height: 1px;
    background-color: #00d9d5;
`;