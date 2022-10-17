import { CSSProperties } from "react"
import styled from "styled-components"
import Colors from "../styles/colors"

export default function OpeningView(props: {
  className?: string
  style?: CSSProperties
  openingHours: OpeningHour[]
}) {
  const { className, style, openingHours } = props

  return (
    <Container className={className} style={style}>
      {openingHours.map((e) => (
        <OpeningItem key={e.day} isClosed={e.isClosed}>
          {e.day}
        </OpeningItem>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const OpeningItem = styled.div<{ isClosed: boolean }>`
  padding: 2px 4px;
  color: ${Colors.white};
  border-radius: 4px;
  font-size: 12px;
  margin-right: 4px;
  background-color: ${(p) => (p.isClosed ? Colors.grey : Colors.primaryLight)};
`
