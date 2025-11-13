import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();





const app = express();



app.use(cors());
app.use(express.json());


app.use("/api/tasks", taskRoutes);


app.use((err, req, res, next) =>{
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Internal server error'});
}
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    {console.log(`Server running on https://localhost: ${PORT}`);}
)