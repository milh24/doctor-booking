import Util from "utils/utils";

export default class Service {
  static async getDoctors() {
    try {
      const res = await fetch(`${process.env.API_HOST}/doctor`, {
        method: "GET",
        headers: {
          "x-api-key": process.env.API_KEY!,
        },
      });
      const data: Doctor[] = await res.json();
      return data.map((e) => {
        return {
          ...e,
          opening_hours: Util.sortDay(e.opening_hours),
        };
      });
    } catch (e) {
      return [];
    }
  }

  static async getDoctor(id: string): Promise<Doctor | null> {
    try {
      const res = await fetch(`${process.env.API_HOST}/doctor/${id}`, {
        method: "GET",
        headers: {
          "x-api-key": process.env.API_KEY!,
        },
      });
      const data = await res.json();
      return {
        ...data,
        opening_hours: Util.sortDay(data.opening_hours),
      };
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async getBookings(): Promise<Booking[]> {
    try {
      const res = await fetch(`${process.env.API_HOST}/booking`, {
        method: "GET",
        headers: {
          "x-api-key": process.env.API_KEY!,
        },
      });
      return res.json();
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  static async createBooking(
    data: Omit<Booking, "id" | "status">
  ): Promise<Booking | null> {
    try {
      const res = await fetch(`${process.env.API_HOST}/booking`, {
        method: "POST",
        headers: {
          "x-api-key": process.env.API_KEY!,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return res.json();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async updateBooking(
    id: string,
    data: Partial<Omit<Booking, "id">>
  ): Promise<string | null> {
    try {
      const res = await fetch(`${process.env.API_HOST}/booking/${id}`, {
        method: "PATCH",
        headers: {
          "x-api-key": process.env.API_KEY!,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return res.text();
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
