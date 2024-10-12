const express = require("express");
const router = require("./routes");
const { sequelize } = require('./models'); // Asegúrate de apuntar a la carpeta correcta

const app = express();

// Sincronizar con la base de datos
sequelize.sync()
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.error("Error conectando a la base de datos: ", err);
  });

app.use(express.json());
app.use("/productos", router.productosRoute);
app.use("/fabricantes", router.fabricantesRoute);
app.use("/componentes", router.componentesRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
