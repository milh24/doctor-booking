import { NextApiRequest, NextApiResponse } from "next";
import Service from "services/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "PATCH") {
    const response = await Service.updateBooking(
      req.query.id!.toString(),
      req.body
    );
    return res.status(200).json(response);
  }
  res.status(400).send("Invalid method");
}
