import { GetServerSideProps, InferGetServerSidePropsType } from "next";

function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      Home
      {JSON.stringify(props.doctor, null, 2)}
    </div>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${process.env.API_HOST}/doctor`, {
    method: "GET",
    headers: {
      "x-api-key": process.env.API_KEY!,
    },
  });
  const data: Doctor[] = await res.json();
  return {
    props: {
      doctor: data,
    },
  };
};
