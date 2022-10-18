import DoctorCard from "components/DoctorCard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Service from "services/services";
import styled from "styled-components";

function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Grid>
      {props.doctors.map((e) => (
        <DoctorCard key={e.id} doctor={e} />
      ))}
    </Grid>
  );
}

export default Home;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const getServerSideProps: GetServerSideProps<{
  doctors: Doctor[];
}> = async () => {
  return {
    props: {
      doctors: await Service.getDoctors(),
    },
  };
};
