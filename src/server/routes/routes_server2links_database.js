const express = require("express");
const router = express.Router();

const pool = require("../../database/connect_dabatase.js");

// Las rutas declaradas en este archivo requieren comenzar con /links
// links/add
router.get("/add", (req, res) => {
  res.render("links/add.hbs");
});

router.post("/add", async (req, res) => {
  const { title, url, description } = req.body;
  const newLink = {
    title,
    url,
    description,
  };
  console.log(newLink);
  await pool.query("INSERT INTO links SET ?", [newLink]);
  req.flash("success", "Link saved succesfully");
  res.redirect("/links");
});

router.get("/", async (req, res) => {
  const links = await pool.query("SELECT * FROM `links`;");
  console.log(links);
  res.render("links/list.hbs", { links: links });
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Link Eliminado: ", id);
  await pool.query("DELETE FROM `links` WHERE id= ?;", [id]);
  req.flash("success", "Link Romeved Successfully");
  res.redirect("/links");
});


// Se requieren dos rutas para editar un elemento de la Base de Datos
// Las peticiones al servidor de tipo put y delete no existen en HTML, pero si existen en HTTP y no se prevee que sea implementado en el futuro.
// se hace uso de la petición de tipo 'get' pero con un 'edit/' para desarrollar este tipo de consultas hacia la base de datos a través de un servidor.
router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Link a Editar: ", id);

  // Recibimos los datos previamente ingresados en la Base de Datos:
  const links = await pool.query("SELECT * FROM `links` WHERE id = ?;", [id]);
  // Mandamos los datos del link a un nuevo formulario
  console.log(links);
  res.render("links/edit", { link: links[0] });
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, url } = req.body;
  const newLink = {
    title,
    description,
    url,
  };

  await pool.query("UPDATE `links` SET ? WHERE id= ?", [newLink, id]);
  req.flash("success", "Link Updated Successfully");
  res.redirect("/links");
});

module.exports = router;
