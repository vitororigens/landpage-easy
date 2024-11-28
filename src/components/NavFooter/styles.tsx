import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-blend-mode: overlay; 
    flex-direction: column;
    align-items: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 768px) {
        height: auto; 
        padding: 20px;
    }
`;


export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 20px;
        height: auto;
    }
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
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