import styled from "styled-components";

export const PageTitle = styled.h1`
display: flex;
align-items: center;
justify-content: center;
`

export const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: azure;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export const Img = styled.img`
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  max-height: 350px;
  border-radius: 6px;
  border: 2px solid black;
  background-color: rgba(206, 204, 204, 0.6);
`;

export const Footer = styled.footer`
  padding: 2rem;
  margin-top: 16px;
  border-radius: 6px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(206, 204, 204, 0.6);
`;

export const Strong = styled.strong`
  font-size: 24px;
  color: black;
`;

export const Span = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;