// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readdirSync } from "fs";
import { internet, lorem } from "faker";
import { CatPost } from "../types/Cats";
const { userName } = internet;
const { sentence } = lorem;
const data: CatPost[] = readdirSync("public/assets/cats").map((fileName) => {
  return {
    author: userName(),
    title: sentence(),
    url: `/assets/cats/${fileName}`,
  };
});
export default function handler(req, res) {
  res.status(200).json(data);
}
