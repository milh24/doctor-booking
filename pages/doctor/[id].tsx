import { InferGetServerSidePropsType } from "next"
import Head from "next/head"
import { connect } from "react-redux"
import Avatar from "../../components/Avatar"
import BookingForm from "../../components/BookingForm"
import OpeningDetailView from "../../components/OpeningDetailView"
import Typography from "../../components/Typography"
import { addDoctor } from "../../redux/actions/appActions"
import { RootState, wrapper } from "../../redux/store"
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
        src={`https://avatars.dicebear.com/api/micah/${name}.svg`}
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

export default connect((state: RootState) => state)(DoctorPorfile)

export const getServerSideProps = wrapper.getServerSideProps<{
  doctor: Doctor
}>((store) => async (context) => {
  const doctorId = context.params?.id?.toString()
  if (!doctorId) {
    return {
      notFound: true,
    }
  }
  console.log(store.getState().app.doctors)
  const cache = store.getState().app.doctors.find((e) => e.id == doctorId)
  if (cache) {
    console.log("use cache")
    return {
      props: {
        doctor: cache,
      },
    }
  }
  const doctor = await Service.getDoctor(doctorId)
  if (!doctor) {
    return {
      notFound: true,
    }
  }
  store.dispatch(addDoctor(doctor))
  return {
    props: {
      doctor: doctor,
    },
  }
})
