const express = require('express');
const router = express.Router();

const pool = require('../../database/connect_dabatase.js');

// Las rutas declaradas en este archivo requieren comenzar con /links
// links/add
router.get("/add", (req, res) => {
  res.render('links/add.hbs');
});

router.post('/add', async (req, res) => {
  const { title, url, description } = req.body;
  const newLink = {
    title,
    url,
    description
  };
  console.log(newLink);
  await pool.query('INSERT INTO links SET ?', [newLink]);
  res.send('received');
});

router.get('/', async (req, res) => {
  const links = await pool.query('SELECT * FROM `links`;');
  console.log(links);
  res.render('links/list.hbs', { links: links });
});

module.exports = router;
