import { Request, Response } from "express";

interface HelloResponse {
  hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = (name) => ({ hello: name });

export const rootHandler = (req: Request, res: Response) => {
  return res.send("API is working 🤓");
};

export const helloHandler = (_req: Request, res: Response) => {
  const { params } = _req;
  const { name = "World" } = params;
  const response = helloBuilder(name);

  return res.json(response);
};
