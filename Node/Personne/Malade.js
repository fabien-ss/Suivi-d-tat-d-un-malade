const Database = require('../Base/Database');

class Malade{
    constructor(idMalade, identification, naissance){
      this.idMalade = idMalade;    
      this.identification = identification;
      this.age = naissance;
    }
  async getMalade() {
    const connection = Database.connect();
    let marary = await connection.query("select * from malade");
    return marary;
  }
  alaivoLery(callback, id) {
    const marary = [];
    const connection = Database.connect();
    const query = `SELECT * FROM malade where idmalade ='`+id+"'";
    connection.query(query, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        for (let i = 0; i < res.rows.length; i++) {
          const malade = new Malade(res.rows[i].idmalade, res.rows[i].identification, res.rows[i].age)
          marary.push(malade);
        }
        callback(null, marary);
      }
      connection.end();
    });
  }
  alaivoNyMarary(callback) {
    const marary = [];
    const connection = Database.connect();
    const query = `SELECT * FROM malade`;
    connection.query(query, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        for (let i = 0; i < res.rows.length; i++) {
          const malade = new Malade(res.rows[i].idmalade, res.rows[i].identification, res.rows[i].age)
          marary.push(malade);
        }
        callback(null, marary);
      }
      connection.end();
    });
  }
}
module.exports = Malade;