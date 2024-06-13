const mongoose = require('mongoose');
const fs = require('fs');
const { Surgeon, Intervention } = require('./Models')

const SeedTable = async (Model, dataName) => {
    const data = JSON.parse(fs.readFileSync(`./data/${dataName}.json`, 'utf-8'));
    const count = await Model.countDocuments();
    if (count > 0) {
      console.log(`Table ${dataName} already seeded`);
      await Model.deleteMany(data);
      console.log(`Table ${dataName} emptied`);
      return;
    }
    await Model.insertMany(data);
    console.log(`Table ${dataName} successfully seeded`);
  }

const addSurgeon_id = async () => {

  // ajouter un champ surgeon_id à la collection interventions
  
  // pour chaque intervention, le champ surgeon_id prend _id de la coll surgeon 
  // si surgeon.name = intervention.surgeon et surgeon.speciality = intervention.speciality
  // Intervention.InsertMany


  // Joindre les interventions de chaque surgeon par son id
  // Surgeon.aggregate([
  //   {
  //     $lookup: {
  //       from: "interventions",        // Collection à joindre
  //       localField: "_id",        // Champ dans la collection surgeon
  //       foreignField: "user_id",  // Champ dans la collection interventions
  //       as: "interventions"           // Alias pour les résultats de la jointure
  //     }
  //   }
  // ]);

  // OU checker l'utilisation des pipelines pour des requetes 
}

mongoose.connect(process.env.DB_ADDRESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


mongoose.connection.once('open', async () => {
    console.log('Connected to MongoDB');
    
    //await SeedTable(Surgeon, 'surgeons');
    await SeedTable(Intervention, 'interventions');
    mongoose.connection.close();
  });

  // fonction pour ajouter surgeon_id = surgeon._id a chaque intervention ou surgeon= surgeon.name
  // et speciality = surgeon.speciality
