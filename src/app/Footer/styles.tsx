import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #f5f5f5;
    background-blend-mode: overlay; 
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        height: auto; 
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 40px;
    height: 100%;
    margin: 0 auto;
    max-width: 900px;

    @media (max-width: 768px) {
        padding: 20px;
        height: auto;
        flex-direction: column;
    }
`;

export const ContentItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    margin-top: 20px;
    
    @media (max-width: 768px) {
       flex-direction: column;
       align-items: center;
       text-align: center;
    }
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
`;

