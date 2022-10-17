import Util from "../utils/utils"

export default class Service {
  static async getDoctors() {
    try {
      const res = await fetch(`${process.env.API_HOST}/doctor`, {
        method: "GET",
        headers: {
          "x-api-key": process.env.API_KEY!,
        },
      })
      const data: Doctor[] = await res.json()
      return data.map((e) => {
        return {
          ...e,
          opening_hours: Util.sortDay(e.opening_hours),
        }
      })
    } catch (e) {
      return []
    }
  }

  static async getDoctor(id: string) {
    try {
      const res = await fetch(`${process.env.API_HOST}/doctor/${id}`, {
        method: "GET",
        headers: {
          "x-api-key": process.env.API_KEY!,
        },
      })
      const data = await res.json()
      return {
        ...data,
        opening_hours: Util.sortDay(data.opening_hours),
      }
    } catch (e) {
      return null
    }
  }
}
