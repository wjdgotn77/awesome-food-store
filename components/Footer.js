import styled from "styled-components";

export default function Footer() {
  return <Container>@2022 HaesooJeong</Container>;
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  text-align: center;
`;
