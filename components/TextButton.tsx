import { CSSProperties, MouseEventHandler, ReactNode } from "react"
import styled from "styled-components"
import Colors from "../styles/colors"

export default function TextButton(props: {
  className?: string
  style?: CSSProperties
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
}) {
  const { className, style, onClick, children } = props

  return (
    <Container className={className} style={style} onClick={onClick}>
      {children}
    </Container>
  )
}

const Container = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 8px;
  color: ${Colors.primary};
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${Colors.primaryLight};
    background-color: ${Colors.filled};
  }
`
