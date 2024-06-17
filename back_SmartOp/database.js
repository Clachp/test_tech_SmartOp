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

  const interventions = await Intervention.find({});
  for (const intervention of interventions) {
      const surgeon = await Surgeon.findOne({
          name: intervention.surgeon,
          specialty: intervention.specialty
      });

      if (surgeon) {
          !intervention.surgeon_id ? 
          intervention.surgeon_id = surgeon._id : 
          console.log("inter sur id = ", intervention.surgeon_id);
          await intervention.save();
          surgeon.interverventions.find((e) => e == intervention._id) == undefined ? 
          surgeon.interverventions.push(intervention._id) :
          console.log("found :", surgeon.interverventions.find((e) => e == intervention._id));
          await surgeon.save();
      }
  }
}

mongoose.connect(process.env.DB_ADDRESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// mongoose.connection.once('open', async () => {
  // const existS = await Surgeon.exists();
  // if (!existS)
  //   await SeedTable(Surgeon, 'surgeons');
  // const existI = await Intervention.exists();
  // if (!existI)
  //   await SeedTable(Intervention, 'interventions');
  // if(!existS || !existI)
  //   await SetReferences();
//   console.log('Database configured');
//   mongoose.connection.close();
// });

