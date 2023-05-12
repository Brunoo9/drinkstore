import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import ordenRoutes from "./routes/ordenRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
const app = express();
app.use(express.json()); // para que pueda procesar la informacion que viene como json
dotenv.config(); //para establecer la configuracion de las variables de entorno

//configuro los staticos
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static("./public/uploads"));

// configurar cors
const whiteList = [process.env.FRONTEND_URL_A, process.env.FRONTEND_URL_B];

const corsOptions = {
  origin: function (origin, callback) {
    // el origin trae quien realiza la peticion ej: localhost:3000
    console.log(`Request generada desde la ip: ${origin}`);
    if (whiteList.includes(origin) || origin === undefined) {
      // el undefined es para que me deje hacer peticiones con postman
      // en producción no tendria pq estar
      callback(null, true);
    } else {
      callback(new Error("error de cors"));
    }
  },
};

app.use(cors(corsOptions));

//rutas
app.use("/api/users", userRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/orders", ordenRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto ${port}`);
});
