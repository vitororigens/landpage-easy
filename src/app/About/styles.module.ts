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
    @media (max-width: 768px) {
        height: auto; 
        padding: 20px;
    }
`;

export const Content = styled.div`
        display: flex;;
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