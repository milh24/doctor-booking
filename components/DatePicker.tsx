import { CSSProperties } from "react";
import Calendar, { OnChangeDateCallback } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import Colors from "styles/colors";
import Typography from "./Typography";

export default function DatePicker(props: {
  className?: string;
  style?: CSSProperties;
  label: string;
  onChange: OnChangeDateCallback;
}) {
  const { className, style, label, onChange } = props;

  const getMinDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);
    return tomorrow;
  };

  return (
    <Container className={className} style={style}>
      <Typography variant="h4" color={Colors.primaryLight}>
        {label}
      </Typography>
      <div style={{ marginTop: 8 }}>
        <Calendar onChange={onChange} minDate={getMinDate()} />
      </div>
    </Container>
  );
}

const Container = styled.div``;
