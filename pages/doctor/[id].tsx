import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Avatar from "../../components/Avatar"
import BookingForm from "../../components/BookingForm"
import OpeningDetailView from "../../components/OpeningDetailView"
import Typography from "../../components/Typography"
import Service from "../../services/services"
import Util from "../../utils/utils"

function DoctorPorfile(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { doctor } = props
  const { name, address, opening_hours } = doctor
  return (
    <>
      <Head>
        <title>{`${name} - ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
      </Head>
      <Typography style={{ marginTop: 12 }} variant="h1">
        {name}
      </Typography>
      <Avatar
        style={{ marginTop: 12 }}
        src={`https://avatars.dicebear.com/api/micah/${JSON.stringify(
          doctor,
        )}.svg`}
        size={96}
      />
      <Typography style={{ marginTop: 12 }} variant="h4">
        {Util.formatAddress(address)}
      </Typography>
      <OpeningDetailView
        style={{ marginTop: 12 }}
        openingHours={opening_hours}
      />
      <BookingForm style={{ marginTop: 12 }} />
    </>
  )
}

export default DoctorPorfile

export const getServerSideProps: GetServerSideProps<{
  doctor: Doctor
}> = async (context) => {
  if (!context.params?.id) {
    return {
      notFound: true,
    }
  }
  const doctor = await Service.getDoctor(context.params?.id! as string)
  if (!doctor) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      doctor: doctor,
    },
  }
}
