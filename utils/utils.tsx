export default class Util {
  static formatAddress(address: Address) {
    const { district, line_1, line_2 } = address;
    return `${line_2}, ${line_1}, ${district}`;
  }

  static sortDay(openingHours: OpeningHour[]) {
    const dayOrder = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return openingHours.sort((a, b) => {
      if (dayOrder.indexOf(a.day) == dayOrder.indexOf(b.day)) {
        return 0;
      }
      if (dayOrder.indexOf(a.day) > dayOrder.indexOf(b.day)) {
        return 1;
      }
      return -1;
    });
  }

  static formatTime(time: number) {
    const hour = Math.floor(time);
    const minute = Math.round(((time - hour) / 1) * 60)
      .toString()
      .padStart(2, "0");
    return `${hour}:${minute} ${hour < 12 ? "AM" : "PM"}`;
  }
}
