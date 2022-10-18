import Typography from "components/Typography";
import { CSSProperties, useMemo } from "react";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import Colors from "styles/colors";
import Util from "utils/utils";

export default function StartPicker(props: {
  className?: string;
  style?: CSSProperties;
  label: string;
  openingHour: OpeningHour;
  value?: number;
  onChange: (value: number) => void;
}) {
  const { className, style, label, openingHour, value, onChange } = props;

  const timeList = useMemo(() => {
    const start = Number(openingHour.start);
    const end = Number(openingHour.end);
    const availableSlot = (end - start) / 0.5 - 1;
    return new Array(availableSlot).fill(0).map((e, i) => start + i * 0.5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openingHour.day]);

  return (
    <Container className={className} style={style}>
      <Typography variant="h4" color={Colors.primaryLight}>
        {label}
      </Typography>
      <Row>
        {timeList.map((e) => (
          <StartButton
            key={e}
            selected={value == e}
            onClick={() => onChange(e)}
          >
            {Util.formatTime(e)}
          </StartButton>
        ))}
      </Row>
    </Container>
  );
}

const Container = styled.div``;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;

const StartButton = styled.button<{ selected: boolean }>`
  padding: 4px 8px;
  font-size: 16px;
  border-radius: 4px;
  color: ${(p) => (p.selected ? Colors.white : Colors.primaryLight)};
  background-color: ${(p) => (p.selected ? Colors.primary : Colors.filled)};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.primaryLight};
    color: ${Colors.white};
  }
`;
