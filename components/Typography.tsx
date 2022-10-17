import { ReactNode } from "react"
import styled, { CSSProperties } from "styled-components"

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subheader1"
  | "subheader2"
  | "subheader3"
  | "body1"
  | "body2"
  | "caption"

type Props = {
  className?: string
  style?: CSSProperties
  variant?: TypographyVariant
  color?: string
  children?: ReactNode
}

const Typography: React.FC<Props> = (props) => {
  const { className, style, variant = "body1", color, children } = props

  return (
    <Container
      className={className}
      style={style}
      variant={variant}
      color={color}
    >
      {children}
    </Container>
  )
}

export default Typography

type ContainerProps = {
  variant: TypographyVariant
  color?: string
}

const Container = styled.div<ContainerProps>`
  font-size: ${(p) => getFontSize(p)};
  font-weight: ${(p) => getFontWeight(p)};
  line-height: ${(p) => getLineHeight(p)};
  color: ${(p) => p.color};
  white-space: pre-wrap;
`

const getFontSize = (props: ContainerProps) => {
  const { variant } = props
  switch (variant) {
    case "h1":
      return "41px"
    case "h2":
      return "29px"
    case "h3":
      return "21px"
    case "h4":
      return "18px"
    case "subheader1":
      return "16x"
    case "subheader2":
      return "16px"
    case "subheader3":
      return "14px"
    case "body1":
      return "16px"
    case "body2":
      return "14px"
    case "caption":
      return "12px"
    default:
      return null
  }
}

const getLineHeight = (props: ContainerProps) => {
  const { variant } = props
  switch (variant) {
    case "h1":
      return "52px"
    case "h2":
      return "36px"
    case "h3":
      return "28px"
    case "h4":
      return "24px"
    case "subheader1":
      return "22px"
    case "subheader2":
      return "22px"
    case "subheader3":
      return "18px"
    case "body1":
      return "22x"
    case "body2":
      return "19px"
    case "caption":
      return "14px"
    default:
      return null
  }
}

const getFontWeight = (props: ContainerProps) => {
  const { variant } = props
  switch (variant) {
    case "h1":
      return "700"
    case "h2":
      return "700"
    case "h3":
      return "700"
    case "h4":
      return "500"
    case "subheader1":
      return "700"
    case "subheader2":
      return "500"
    case "subheader3":
      return "700"
    case "body1":
      return "400"
    case "body2":
      return "400"
    case "caption":
      return "400"
    default:
      return null
  }
}
