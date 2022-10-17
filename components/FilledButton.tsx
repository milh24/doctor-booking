import { CSSProperties, MouseEventHandler, ReactNode } from "react"
import styled from "styled-components"
import Colors from "../styles/colors"

export default function FilledButton(props: {
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
  color: ${Colors.white};
  background-color: ${Colors.primary};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.primaryLight};
  }
`
