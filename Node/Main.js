const Malade = require('./Personne/Malade');
const Malade1 = new Malade();
Malade1.alaivoLery((err, malades) => {
  if (err) {
    console.error('Erreur lors de la requête', err);
  } else {
    console.log(malades);
  }
},2);
// async function listeMalade(){
//   m = new Malade();
//   let liste = await m.getMalade()
//   try{
//     // console.log(liste);
//     return await m.getMalade();
//   }
//   catch(error) {
//     console.log(error);
//     return [];
//   }
// }
// console.log(listeMalade());