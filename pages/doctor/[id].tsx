import Avatar from "components/Avatar";
import BookingCard from "components/BookingCard";
import BookingForm from "components/BookingForm";
import OpeningDetailView from "components/OpeningDetailView";
import Typography from "components/Typography";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Service from "services/services";
import Util from "utils/utils";

function DoctorPorfile(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { doctor, booking } = props;
  const { name, address, opening_hours } = doctor;

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
      {booking && <BookingCard style={{ marginTop: 12 }} booking={booking} />}
      {!booking && <BookingForm style={{ marginTop: 12 }} doctor={doctor} />}
    </>
  );
}

export default DoctorPorfile;

export const getServerSideProps: GetServerSideProps<{
  doctor: Doctor;
  booking: Booking | null;
}> = async (context) => {
  const doctorId = context.params?.id?.toString();
  if (!doctorId) {
    return {
      notFound: true,
    };
  }
  const doctor = await Service.getDoctor(doctorId);
  if (!doctor) {
    return {
      notFound: true,
    };
  }
  const bookings = await Service.getBookings();
  return {
    props: {
      doctor: doctor,
      booking:
        bookings.find(
          (e) => e.doctorId == doctor.id && e.status == "confirmed"
        ) ?? null,
    },
  };
};
