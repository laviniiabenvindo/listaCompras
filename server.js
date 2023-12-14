const express = require("express");
const exphbs = require("express-handlebars");
const port = 3333;

const app = express();

const conn = require("./db/conn");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

// Importar as ROTAS 
const productRouter = require("./routers/productRouter");
//Usar as ROTAS
app.use("/product", productRouter);

app.get('/', (request, response)=>{
  return response.send('OI')
})

app.listen(port, () => {
  console.log(`porta ${port} aberta na casa do caralho!!!!!`);
});
