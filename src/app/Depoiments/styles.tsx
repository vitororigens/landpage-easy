import Image from "next/image";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    background-blend-mode: overlay; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    padding: 100px;
    margin: 0 auto;
    height: 100vh;
    @media (max-width: 768px) {
        height: auto; 
        padding: 20px;
    }
`;

export const ContainerItems = styled.div`
    display: flex;
    max-width: 900px;
    height: 100%;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    max-width: 900px;
    height: 100%;
    justify-content: space-between;
    flex-direction: row;
    gap: 100px;

      @media (max-width: 768px) {
        height: auto; 
        padding: 20px;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const ContentDivider = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Divider = styled.div`
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;
    height: 1px;
    background-color: #00d9d5;
`;

export const Slide = styled.div`
    flex: 0 0 200px; 
    scroll-snap-align: start; 
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  /* Center content horizontally */
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05); 
    }

    @media (max-width: 768px) {
        flex: 0 0 250px;
    }
`;


export const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-end;
    justify-content: space-around;
    height: 100%;
    @media (max-width: 768px) {
        gap: 20px;
    }
`;

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    @media (max-width: 768px) {
        gap: 20px;
    }
`;


export const ImageContainer = styled(Image)`
    width: 400px;
    border-radius: 10px;
`;

export const ContentItems = styled.div`
    flex-direction: row;
    display: flex;
    gap: 20px;
    align-items: flex-start;
    
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;