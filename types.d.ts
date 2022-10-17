interface Booking {
  id: string;
  name: string;
  start: number;
  doctorId: string;
  date: string;
  status: string;
}

interface Doctor {
  id: string;
  name: string;
  start: number;
  description: string;
  address: Address;
  opening_hours: OpeningHour[];
  status: "cancel" | "confirmed";
}

interface Address {
  line_1: string;
  line_2: string;
  district: string;
}

interface OpeningHour {
  start: string;
  end: string;
  isClosed: boolean;
  day: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
}
