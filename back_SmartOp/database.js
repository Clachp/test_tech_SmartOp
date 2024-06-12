const mongoose = require('mongoose');
const fs = require('fs');
const { Surgeon, Intervention } = require('./Models')

const SeedTable = async (Model, dataName) => {
    const data = JSON.parse(fs.readFileSync(`./data/${dataName}.json`, 'utf-8'));
    const count = await Model.countDocuments();
    if (count > 0) {
      console.log(`Table ${dataName} already seeded`);
      return;
    }
    await Model.insertMany(data);
    console.log(`Table ${dataName} successfully seeded`);
  }

// Connexion à MongoDB
mongoose.connect(process.env.DB_ADDRESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


mongoose.connection.once('open', async () => {
    console.log('Connected to MongoDB');
    
    await SeedTable(Surgeon, 'surgeons');
    //await SeedTable(Intervention, 'interventions');
    mongoose.connection.close();
  });
