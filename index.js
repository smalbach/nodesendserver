const express = require("express");
const conectarDB = require("./config/db");

const app = express();
console.log("Iniciando el servidor");

//Conetar a la base de datois
conectarDB();

//Puerdo de la app
const port = process.env.PORT || 4000;

//Habilitar leer los valores de un body
app.use(express.json());

app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/enlaces", require("./routes/enlaces"));
app.use("/api/archivos", require("./routes/archivos"));

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
