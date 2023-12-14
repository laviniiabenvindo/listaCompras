const conn = require("../db/conn");
module.exports = class ProductController {
  static async getAllProduct(request, response) {
    try {
      const sql = `SELECT * FROM tb_lista`;
      conn.query(sql, (err, data) => {
        if (err) {
          console.log(err);
        }
        const products = data;
        console.log(products);
        return response.render("product/home", { products });
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json("Erro no servidor!");
    }
  }
  static async createProduct(request, response) {
    try {
      if (!request.body.nome || !request.body.quantidade) {
        return response.status(400).json({
          message: "Por favor, preencha todos os campos!",
        });
      }
      const { nome, quantidade } = request.body;

      const sql = `INSERT INTO tb_lista (nome, quantidade) VALUES ("${nome}", "${quantidade}")`;
      conn.query(sql, (err) => {
        if (err) {
          console.log(err);
        }
        return response.redirect("/product");
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json("Erro no servidor!");
    }
  }
  static async getProduct(request, response) {
    const { id } = request.params;

    const sql = `SELECT * FROM tb_lista WHERE id=${id}`;

    conn.query(sql, (err, data) => {
      if (err) {
        console.log(err);
      }
      const product = data[0];
      return response.render("product/update", {product});
    });
  }
  static async updateProduct(request, response) {}

  static async removeProduct(request, response) {
    try {
      const id = request.body.id;
      const sql = `DELETE FROM tb_lista WHERE id = ${id}`;

      conn.query(sql, (err) => {
        if (err) {
          console.log(err);
        }
      });
      return response.redirect("/product");
    } catch (error) {
      console.log(error);
      return response.status(500).json("Erro no servidor!");
    }
  }
};
