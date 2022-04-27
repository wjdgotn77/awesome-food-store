import styled from "styled-components";

export default function About() {
  return (
    <Container>
      <ImgWrapper>
        <Img
          alt="맛있는 햄버거"
          src="https://images.unsplash.com/photo-1555554317-766200eb80d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
        />
      </ImgWrapper>
      <Info>믿을만한 맛집을 소개합니다.</Info>
    </Container>
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

const Info = styled.div`
  width: 100%;
  margin: 100px auto;
  font-size: 28px;
  text-align: center;
`;
