import { useRouter } from "next/router"
import styled from "styled-components"
import Colors from "../styles/colors"

export default function Header() {
  const router = useRouter()
  return (
    <Container>
      <ContentContainer>
        <Logo onClick={() => router.push("/")}>DoctorBooking</Logo>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${Colors.primary};
  color: ${Colors.white};
`

const ContentContainer = styled.div`
  max-width: 968px;
  margin-left: auto;
  display: flex;
  margin-right: auto;
`

const Logo = styled.div`
  font-weight: 900;
  cursor: pointer;
  display: flex;
  &:hover {
    opacity: 0.7;
  }
`
