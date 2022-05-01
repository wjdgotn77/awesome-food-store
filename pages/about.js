import Head from "next/head";
import styled from "styled-components";

export default function About() {
  return (
    <>
      <Head>
        <title>ABOUT | AWESOME FOOD STORE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <ImgWrapper>
          <Img alt="맛있는 햄버거" src="../cafe.jpg" />
        </ImgWrapper>
        <Info>믿을 수 있는 맛집을 소개합니다.</Info>
      </Container>
    </>
  );
}

const Container = styled.div``;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.p`
  width: 100%;
  margin: 100px auto;
  font-size: 28px;
  text-align: center;
`;
