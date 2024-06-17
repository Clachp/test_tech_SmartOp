class SurgeonResponse {
    constructor(
        name,
        specialty,
        ) {
           this.name = name;
           this.specialty = specialty;
           this.interventions = []; 
           this.numberOfInterventions = 0;
           this.favoriteIntervention = null;
           this.favoriteAnesthesiste = null;
           this.favoriteNurse = null;
           this.favoriteRoom = null;
        }
    
/** GETTERS */
    getName() { return this.name; }
    getSpecialty() { return this.specialty; }
    getInterventions() { return this.interventions; }
    getNumberOfInterventions() { return this.interventions.length; }
    getFavoriteIntervention() { return this.favoriteIntervention; }
    getFavoriteAnesthesiste() { return this.favoriteAnesthesiste; }
    getFavoriteRoom() { return this.favoriteRoom; }

/** SETTERS */
    addIntervention(intervention) {
        this.interventions.push(intervention);
    }

    setFavoriteItem(item) {
        const frequencyMap = {};
        for (const inter of this.interventions) {
            const value = inter[item];
            if (frequencyMap[value]) {
            frequencyMap[value]++;
            } else {
            frequencyMap[value] = 1;
            }
        }

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

    setFavoriteIntervention() {
        this.favoriteIntervention = this.setFavoriteItem('title');
    }
    setFavoriteAnesthesiste() {
        this.favoriteAnesthesiste = this.setFavoriteItem('anesthesiste');
    }
    setFavoriteRoom() {
        this.favoriteRoom = this.setFavoriteItem('roomNumber');
    }

}

module.exports = SurgeonResponse;