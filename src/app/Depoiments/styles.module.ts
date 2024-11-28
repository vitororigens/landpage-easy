import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    background-blend-mode: overlay; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    padding: 100px;
    margin: 0 auto;
    @media (max-width: 768px) {
        height: auto; 
        padding: 20px;
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: 900px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

export const ContentSlide = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 10px;
    overflow-x: hidden;
    justify-content: center;
    width: 100%;  

    @media (max-width: 768px) {
       flex-direction: column;
    }
`;


export const HeaderSlide = styled.div`
    width: 100%;  
    padding-left: 20px;
    padding-right: 20px;	
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;
`;

export const BodySlide = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const ImageContainer = styled(Image)`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;  
    margin-bottom: 10px;  
`;
