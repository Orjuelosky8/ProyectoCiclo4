//Requerimos las dependencias necesarias
// const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./database");
require("dotenv").config();
const app = require("./app");
require("./database");

//Configuración del puerto
app.set("Port", process.env.PORT || 8080);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origen: "*" }));


app.listen(app.get("Port"), function () {
  console.log("listening on port " + app.get("Port"));
});

// CRUD

async function main() {
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}

main();