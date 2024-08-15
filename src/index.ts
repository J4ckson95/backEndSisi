import Express from "express";
import cors from "cors";
import userRouter from "./routes/users.route";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/users", userRouter);
app.listen(8080, () => console.log("Running Server 👨‍🦯‍➡️ ..."));
