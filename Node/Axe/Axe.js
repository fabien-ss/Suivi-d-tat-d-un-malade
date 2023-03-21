const Database = require('../Base/Database');


class Axe{
    constructor(idMalade ,jour, oxygene, temperature){
        this.idMalade = idMalade;
        this.oxygene = oxygene;
        this.jour = jour;
        this.temperature = temperature;
    }
    affiche(){
        console.log(`Oxy: ${this.oxygene}`);
    }
    alaivoNyAretiny(callback, id) {
        const marary = [];
        const connection = Database.connect();
        const query = `SELECT * FROM axe where idmalade='`+id+`'`;
        connection.query(query, (err, res) => {
          if (err) {
            callback(err, null);
          } else {
            for (let i = 0; i < res.rows.length; i++) {
              const malade = new Axe(res.rows[i].idmalade, res.rows[i].jour, res.rows[i].oxygene, res.rows[i].temperature);
              marary.push(malade);
            }
            callback(null, marary);
          }
          connection.end();
        });
      }
}
module.exports = Axe;
