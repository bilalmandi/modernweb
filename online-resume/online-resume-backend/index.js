const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

app.get('/getEdu', (req, res) => {
  res.json([
    { degree: 'B.Sc. Computer Science', school: 'Harvard University', year: 2022 },
    { degree: 'M.Sc. Data Science', school: 'Princeton University', year: 2024 }
  ]);
});


app.get('/getExp', (req, res) => {
  res.json([
    { title: 'Software Engineer', company: 'Google', years: '2022-2024' },
    { title: 'Data Analyst', company: 'Meta', years: '2020-2022' }
  ]);
});


app.get('/getOverview', (req, res) => {
  res.json({ name: 'Bilal Mandi', summary: 'A passionate software developer with a love for learning and creating.' });
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
