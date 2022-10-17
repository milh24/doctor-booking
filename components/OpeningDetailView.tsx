import { CSSProperties } from "react"
import styled from "styled-components"
import Colors from "../styles/colors"
import Util from "../utils/utils"
import Typography from "./Typography"

export default function OpeningDetailView(props: {
  className?: string
  style?: CSSProperties
  openingHours: OpeningHour[]
}) {
  const { className, style, openingHours } = props

  return (
    <Container className={className} style={style}>
      {openingHours.map((e) => (
        <OpeningItemContainer key={e.day}>
          <OpeningItem isClosed={e.isClosed}>{e.day}</OpeningItem>
          {!e.isClosed && (
            <Typography>{`${Util.formatTime(e.start)} - ${Util.formatTime(
              e.end,
            )}`}</Typography>
          )}
        </OpeningItemContainer>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const OpeningItemContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`

const OpeningItem = styled.div<{ isClosed: boolean }>`
  display: flex;
  justify-content: center;
  padding: 2px 4px;
  color: ${Colors.white};
  border-radius: 4px;
  font-size: 16px;
  margin-right: 8px;
  width: 48px;
  background-color: ${(p) => (p.isClosed ? Colors.grey : Colors.primaryLight)};
`
