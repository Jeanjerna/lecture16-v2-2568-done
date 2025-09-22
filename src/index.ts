import express, {
  type Request,
  type Response,
} from "express";

// import middlewares
import morgan from "morgan";
import invalidJsonMiddleware from "./middlewares/invalidJsonMiddleware.js";

// import routes
import studentsRoutes_v1 from "./routes/studentsRoutes_v1.js";

const app = express();
const port = 3000;

// morgan middleware
// app.use(morgan("dev"));
app.use(morgan("combined"));

// middlewares
app.use(express.json());

// custom middlewares
app.use(invalidJsonMiddleware);

// Endpoints
app.get("/", (req: Request, res: Response) => {
  res.send("API services for Student Data");
});

app.use("/api/v1" , studentsRoutes_v1);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
