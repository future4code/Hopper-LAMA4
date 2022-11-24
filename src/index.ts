import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { bandRouter } from "./controller/routes/bandRouter";
import { showRouter } from "./controller/routes/showRouter";
import { userRouter } from "./controller/routes/userRouter";

const app: Express = express();
app.use(express.json());
app.use(cors());


app.use("/user", userRouter);

app.use("/user", userRouter);

app.use("/band", bandRouter);

app.use("/band", bandRouter);

app.use("/show", showRouter);

app.use("/show", showRouter);


const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});