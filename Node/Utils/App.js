const Malade = require('../Personne/Malade');
async function listeMalade(){
    const m = new Malade();
    try{
        const list = m.getMalade();
        return list;
    }
    catch (error){
        console.error(error);
        return [];
    }
}