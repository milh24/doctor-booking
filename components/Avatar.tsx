import { CSSProperties } from "react"
import styled from "styled-components"
import Colors from "../styles/colors"

export default function Avatar(props: {
  className?: string
  style?: CSSProperties
  src: string
  size?: number
}) {
  const { className, style, src, size = 64 } = props

  return (
    <Container
      className={className}
      style={{
        ...style,
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
      src={src}
    />
  )
}

const Container = styled.img`
  background-color: ${Colors.filled};
`
