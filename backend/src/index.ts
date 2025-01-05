import express, { Application } from "express";
import connectDB from "./config/mongodb-connection";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import geminiRoute from "./routes/geminiRoute";
import googleAuthRouter from "./routes/googleAuth";
const app: Application = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use("/api", geminiRoute);
app.use("/auth/callback/google", googleAuthRouter);
// Start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
