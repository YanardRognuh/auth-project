import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = "608acf643ed0d6a15b072dc3a0f7f4a9";
const BASE_URL = "https://api.rajaongkir.com/starter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Handle GET request for cities
    const response = await fetch(`${BASE_URL}/city`, {
      headers: {
        key: API_KEY,
      },
    });
    const data = await response.json();
    res.status(200).json(data.rajaongkir.results);
  } else if (req.method === "POST") {
    // Handle POST request for cost
    const { origin, destination, weight, courier } = req.body;
    const response = await fetch(`${BASE_URL}/cost`, {
      method: "POST",
      headers: {
        key: API_KEY,
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        origin,
        destination,
        weight: weight.toString(),
        courier,
      }),
    });
    const data = await response.json();
    res.status(200).json(data.rajaongkir.results[0].costs);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
