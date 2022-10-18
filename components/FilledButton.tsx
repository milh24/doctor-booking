import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import Colors from "styles/colors";

export default function FilledButton(props: {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: ReactNode;
}) {
  const { className, style, onClick, disabled = false, children } = props;

  return (
    <Container
      className={className}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}

const Container = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 8px;
  color: ${Colors.white};
  background-color: ${Colors.primary};
  border: none;
  cursor: ${(p) => (p.disabled ? "not-allowed;" : "pointer")};
  opacity: ${(p) => (p.disabled ? 0.7 : 1)};
  &:hover {
    background-color: ${(p) => (p.disabled ? null : Colors.primaryLight)};
  }
`;
