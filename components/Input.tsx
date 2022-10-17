import { CSSProperties } from "react"
import styled from "styled-components"
import Colors from "../styles/colors"
import Typography from "./Typography"

export default function Input(props: {
  className?: string
  style?: CSSProperties
  label: string
  placeholder: string
}) {
  const { className, style, label, placeholder } = props

  return (
    <Container className={className} style={style}>
      <Typography variant="h4" color={Colors.primaryLight}>
        {label}
      </Typography>
      <InputContainer placeholder={placeholder} />
    </Container>
  )
}

const Container = styled.div``

const InputContainer = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  margin-top: 8px;
  border-radius: 8px;
  border: 2px solid transparent;
  outline: none;
  background-color: ${Colors.filled};
  &:focus {
    border: 2px solid ${Colors.primary};
  }
`
