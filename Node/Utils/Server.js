const Malade = require('../Personne/Malade');
const Axe = require('../Axe/Axe');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from Node.js!' };
  res.send(data);
});

const aretina = new Axe();

app.get('/api/alaivoNyAretiny/:id',(req,res) =>{
  aretina.alaivoNyAretiny((err, etat) => {
    if (err) {
      console.error('Erreur lors de la requête', err);
    }
    else{
      res.send(JSON.stringify(etat));
    }
  }, req.params.id);
})


const Malade1 = new Malade();
app.get('/api/alaivoNyMarary', (req, res) =>{
  Malade1.alaivoNyMarary((err, malades) => {
    if (err) {
      console.error('Erreur lors de la requête', err);
    } else {
      // res.send(malades);
      res.send(JSON.stringify(malades));
    }
  });
})

app.get('/api/alaivoLery/:id',(req,res) =>{
  Malade1.alaivoLery((err, malades) => {
      res.send(JSON.stringify(malades));
  }, req.params.id);
})

app.listen(3000, () => console.log('Server started on port 3000'));
