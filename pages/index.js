import Head from "next/head";
// import Image from "next/image";
import styled from "styled-components";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>HOME | AWESOME FOOD STORE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        {posts.map((post) => (
          <ImageWrapper key={post.id}>
            {/* next/image로 수정. */}
            <Img alt={post.name} src={post.thumb} />
            <span>{post.name}</span>
          </ImageWrapper>
        ))}
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:9000/stores");
  const posts = await res.json();

  return {
    props: { posts },
  };
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 80px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const Img = styled.img`
  width: 300px;
`;
