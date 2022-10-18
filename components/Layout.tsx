import { ReactNode } from "react";
import styled from "styled-components";
import Body from "./Body";
import Header from "./Header";

export default function Layout(props: { children?: ReactNode }) {
  const { children } = props;

  return (
    <Container>
      <Header />
      <Body>{children}</Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
