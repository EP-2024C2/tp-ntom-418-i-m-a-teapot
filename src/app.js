const express = require("express");
const router = require("./routes");
const seed = require("./seeders/seed");
const { sequelize } = require("./models");

const app = express();

// Sincronizar con la base de datos
sequelize
  .sync()
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`http://localhost:${PORT}`);
  await sequelize.sync({ force: true });
  await seed();
});
