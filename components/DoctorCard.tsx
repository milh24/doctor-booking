import { useRouter } from "next/router"
import styled, { CSSProperties } from "styled-components"
import Colors from "../styles/colors"
import Util from "../utils/utils"
import Avatar from "./Avatar"
import OpeningView from "./OpeningView"
import Typography from "./Typography"

export default function DoctorCard(props: {
  className?: string
  style?: CSSProperties
  doctor: Doctor
}) {
  const { className, style, doctor } = props
  const { name, address, opening_hours } = doctor
  const router = useRouter()

  return (
    <Container
      className={className}
      style={style}
      onClick={() => router.push(`/doctor/${doctor.id}`)}
    >
      <Typography variant="h2">{name}</Typography>
      <Avatar
        style={{ marginTop: 12 }}
        src={`https://avatars.dicebear.com/api/micah/${JSON.stringify(
          doctor,
        )}.svg`}
      />
      <Typography style={{ marginTop: 12 }}>
        {Util.formatAddress(address)}
      </Typography>
      <OpeningView style={{ marginTop: 12 }} openingHours={opening_hours} />
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: ${Colors.filled};
  }
`
