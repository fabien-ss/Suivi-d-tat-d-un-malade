const { Client } = require('pg');

class Database {
  static connect() {
    const client = new Client({
      user: 'fabien',
      host: 'localhost',
      database: 'cursusmalade',
      password: 'fabien',
      port: 5432, // le port par défaut pour PostgreSQL est 5432
    });

    client.connect((err) => {
      if (err) {
        console.error('Erreur de connexion', err.stack);
      } else {
        console.log('Connecté à la base de données');
      }
    });

    return client;
  }
}
module.exports = Database;
