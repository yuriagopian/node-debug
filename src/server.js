import express from "express";
import { addUser, getUsers } from "./repositories/UserRepository";
const app = express();

app.get("/", (req, res) => {
  const users = getUsers()

  return res.json({ users });
});

const port = 3333;
app.listen(port);
