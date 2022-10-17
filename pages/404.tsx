import Head from "next/head"
import { useRouter } from "next/router"
import styled from "styled-components"
import FilledButton from "../components/FilledButton"
import Typography from "../components/Typography"
import Colors from "../styles/colors"

function NotFound() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{`Page Not Found - ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
      </Head>
      <Typography color={Colors.grey} variant="h1">
        Page Not Found
      </Typography>
      <FilledButton
        style={{ marginTop: 12 }}
        onClick={() => router.replace("/")}
      >
        Back to Home
      </FilledButton>
    </>
  )
}

export default NotFound

const Title = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 36px;
  font-weight: 700;
  color: ${Colors.grey};
`
