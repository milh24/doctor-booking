import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

export default function Body(props: {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const { className, style, children } = props;

  return (
    <Container className={className} style={style}>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 57px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
`;

const ContentContainer = styled.div`
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;
