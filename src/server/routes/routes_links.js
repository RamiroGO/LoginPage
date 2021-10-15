const express = require('express');
const router = express.Router();

const pool = require('../../database/connect_dabatase.js');

// Las rutas declaradas en este archivo requieren comenzar con /links
// links/add
router.get("/add", (req, res) => {
  res.render('links/add.hbs');
});

router.post('/add', (req, res) => {
  res.send('received');
})

module.exports = router;