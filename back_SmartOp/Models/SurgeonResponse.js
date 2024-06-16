class SurgeonResponse {
    constructor(
        name,
        speciality,
        interventions = [],
        ) {
           this.name = name;
           this.speciality = speciality;
           this.interventions = interventions; 
        }
    
    getName() {
        return this.name;
    }

    getSpeciality() {
        return this.speciality;
    }

    addIntervention(intervention) {
        this.interventions.push(intervention);
    }

    getInterventions() {
        return this.interventions;
    }

    getFavoriteItem(item) {
        const frequencyMap = {};

        this.interventions.forEach(obj => {
            if (obj.hasOwnProperty(item)) {
              const value = obj[item];
              if (frequencyMap[value]) {
                frequencyMap[value]++;
              } else {
                frequencyMap[value] = 1;
              }
            }
          });

        let mostFreqValue = null;
        let maxCount = 0;

        for(const [value, count] of Object.entries(frequencyMap))
        {
            if (count > maxCount) {
                maxCount = count;
                mostFreqValue = value;
            }
        }
        return mostFreqValue;
    }

    getFavoriteAnesthesiste() {
       return this.getFavoriteItem(anesthesiste);
    }

    // getFavoriteNurse() {
    //     const isNurse1 = this.getFavoriteItem(nurse1);
    //     const isNurse2 = this.getFavoriteItem(nurse2);


    // }
}

module.exports = SurgeonResponse;