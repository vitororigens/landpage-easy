import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-blend-mode: overlay; 
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    max-width: 900px;
    height: 100%;
    margin: 0 auto;
    @media (max-width: 768px) {
        height: auto; 
        padding: 20px;
    }
`;

export const ContentDivider = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
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