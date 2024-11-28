import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-blend-mode: overlay; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #41bdb2;
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

export const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #009b9b; 
  color: white;
  border: none;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: #007e7e; 
  }

  svg {
    transition: transform 0.3s;
  }

  &.active svg {
    transform: rotate(180deg); 
  }
`;

export const AccordionBody = styled.div<{ open: boolean }>`
  background-color: #00b5b5; 
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  display: ${({ open }) => (open ? "block" : "none")};
`;
