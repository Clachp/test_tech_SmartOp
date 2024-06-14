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

const SetReferences = async () => {

  const interventions = await Intervention.find({surgeon: "GEODE"});
  for (const intervention of interventions) {
      const surgeon = await Surgeon.findOne({
          name: intervention.surgeon,
          speciality: intervention.speciality
      });

      if (surgeon) {
          !intervention.surgeon_id ? 
          intervention.surgeon_id = surgeon._id : 
          console.log("inter sur id = ", intervention.surgeon_id);
          await intervention.save();
          // !surgeon.interverventions.find(intervention._id) ? BUGG find not a function
          // surgeon.interverventions.push(intervention._id) :
          // console.log("found :", surgeon.interverventions.find(intervention._id));
          // await surgeon.save();
      }
  }
}

mongoose.connect(process.env.DB_ADDRESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once('open', async () => {
  await SeedTable(Surgeon, 'surgeons');
  await SeedTable(Intervention, 'interventions');
  await SetReferences();
  const existS = await Surgeon.exists();
  console.log("surgeon exist = ", existS);
  const existI = await Intervention.exists();
  console.log("intervention exist = ", existI);
  console.log('Database configured');
  mongoose.connection.close();
});

