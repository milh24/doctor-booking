export default class Util {
  static formatAddress(address: Address) {
    const { district, line_1, line_2 } = address
    return `${line_2}, ${line_1}, ${district}`
  }

  static sortDay(openingHours: OpeningHour[]) {
    const dayOrder = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    return openingHours.sort((a, b) => {
      if (dayOrder.indexOf(a.day) == dayOrder.indexOf(b.day)) {
        return 0
      }
      if (dayOrder.indexOf(a.day) > dayOrder.indexOf(b.day)) {
        return 1
      }
      return -1
    })
  }

  static formatTime(time: string) {
    const composition = time.split(".")
    const hour = composition[0]
    const minute = Math.round((Number(composition[1]) / 100) * 60)
      .toString()
      .padStart(2, "0")
    return `${hour}:${minute} ${time < "12.00" ? "AM" : "PM"}`
  }
}
