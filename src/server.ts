import express, { Request, Response } from "express";

const app = express();
const port: number = 6969;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Node.js + Express!");
});

app.get("/api/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  const obj = getObjectByName(name);
  if (obj) {
    res.json(obj);
  } else {
    res.status(404).json({ message: "Object not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function getObjectByName(name: string): any | undefined {
  return arrayOfData.find(
    (obj) => obj.name.toLowerCase() === name.toLowerCase()
  );
}
const arrayOfData: any[] = [
  {
    id: 1,
    name: "John Doe",
    details: "This is John Doe",
    photoUrl: "https://randomuser.me/api/port",
  },
  {
    id: 2,
    name: "Jolidone",
    details: "This is Jane Doe",
    photoUrl: "https://randomuser.me/api/port",
  },
  {
    id: 3,
    name: "John Smith",
    details: "This is John Smith",
    photoUrl: "https://randomuser.me/api/port",
  },
];
