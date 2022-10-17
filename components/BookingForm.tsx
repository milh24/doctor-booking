import { CSSProperties } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import styled from "styled-components"
import FilledButton from "./FilledButton"
import Input from "./Input"

export default function BookingForm(props: {
  className?: string
  style?: CSSProperties
}) {
  const { className, style } = props

  return (
    <Container className={className} style={style}>
      <Calendar onChange={(e: any) => console.log(e)} />
      <Input label="Name" placeholder="Chan Tai Man" />
      <FilledButton style={{ marginTop: 12 }}>Create Booking</FilledButton>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 57px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1);
`
