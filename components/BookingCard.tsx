import Typography from "components/Typography";
import { CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelBooking } from "redux/actions/appActions";
import { RootState } from "redux/store";
import styled from "styled-components";
import Colors from "styles/colors";
import Util from "utils/utils";
import FilledButton from "./FilledButton";

export default function BookingCard(props: {
  className?: string;
  style?: CSSProperties;
  booking: Booking;
}) {
  const { className, style, booking } = props;
  const { name, date, start } = booking;
  const dispatch = useDispatch();
  const loading = useSelector<RootState, boolean>((s) => s.app.loading);

  const cancel = () => {
    if (loading) {
      return;
    }
    dispatch(cancelBooking(booking.id));
  };

  return (
    <Container className={className} style={style}>
      <Typography variant="h3">Booking</Typography>
      <Typography style={{ marginTop: 12 }} variant="h4" color={Colors.primary}>
        Name
      </Typography>
      <Typography variant="h4">{name}</Typography>
      <Typography style={{ marginTop: 12 }} variant="h4" color={Colors.primary}>
        Date
      </Typography>
      <Typography variant="h4">{date}</Typography>
      <Typography style={{ marginTop: 12 }} variant="h4" color={Colors.primary}>
        Time
      </Typography>
      <Typography variant="h4">{Util.formatTime(start)}</Typography>
      <FilledButton
        style={{ marginTop: 36 }}
        onClick={cancel}
        disabled={loading}
      >
        Cancel Booking
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
