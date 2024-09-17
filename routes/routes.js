const express = require('express');
const router = express.Router();

/////name route
router.get('/name', (req, res) => {
  res.send('bilal mandi');
});

//////greeting route
router.get('/greeting', (req, res) => {
  res.send('bilal mandi - n01680731 - lab 2');
});

/////addin route
router.get('/add', (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  res.send(`sum: ${x + y}`);
});

//////calculate route
router.get('/calculate', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const operation = req.query.operation;
  let result;

  if (operation === '+') result = a + b;
  else if (operation === '-') result = a - b;
  else if (operation === '*') result = a * b;
  else if (operation === '/') result = a / b;
  else if (operation === '**') result = a ** b;

  res.send(`result: ${result}`);
});

module.exports = router;
