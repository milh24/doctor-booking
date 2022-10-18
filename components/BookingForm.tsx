import DatePicker from "components/DatePicker";
import FilledButton from "components/FilledButton";
import Input from "components/Input";
import StartPicker from "components/StartPicker";
import Typography from "components/Typography";
import { CSSProperties, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "redux/actions/appActions";
import { RootState } from "redux/store";
import styled from "styled-components";

export default function BookingForm(props: {
  className?: string;
  style?: CSSProperties;
  doctor: Doctor;
}) {
  const { className, style, doctor } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState<string>();
  const [date, setDate] = useState<Date>();
  const [openingHour, setOpeningHour] = useState<OpeningHour>();
  const [start, setStart] = useState<number>();
  const loading = useSelector<RootState, boolean>((s) => s.app.loading);

  const create = () => {
    if (!valid()) {
      return;
    }
    dispatch(
      createBooking({
        doctorId: doctor.id,
        name: name!,
        date: `${date!.getFullYear()}-${(date!.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${date!.getDate().toString().padStart(2, "0")}`,
        start: start!,
      })
    );
  };

  useEffect(() => {
    if (date) {
      setOpeningHour(doctor.opening_hours[date.getDay()]);
    }
    setStart(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date?.toUTCString()]);

  const valid = () => name && date && start && !loading;

  return (
    <Container className={className} style={style}>
      <Typography variant="h3">Booking</Typography>
      <Input
        style={{ marginTop: 24 }}
        label="Name"
        placeholder="Chan Tai Man"
        onChange={setName}
      />
      <DatePicker style={{ marginTop: 24 }} label="Date" onChange={setDate} />
      {openingHour && (
        <StartPicker
          style={{ marginTop: 24 }}
          label="Time"
          openingHour={openingHour}
          value={start}
          onChange={setStart}
        />
      )}
      <FilledButton
        style={{ marginTop: 36 }}
        onClick={create}
        disabled={!valid()}
      >
        Create Booking
      </FilledButton>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 57px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1);
`;
