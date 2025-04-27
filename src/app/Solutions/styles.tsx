import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-blend-mode: overlay; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px;
    margin: 0 auto;
    @media (max-width: 768px) {
        height: auto; 
        padding: 20px;
    }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ContentText = styled.div`
  flex: 1;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    text-align: center;
  }
`;

export const ContentImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ContentDivider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.div`
  flex: 1;
  height: 2px;
  background-color: #00d9d5;
  margin-left: 10px;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioButton = styled.button`
  height: 12px;
  width: 12px;
  background-color: #aeaeae;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e3a8a;
  }
`;

export const ContentItems = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
`;

export const Items = styled.div`
    width: 50%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;
