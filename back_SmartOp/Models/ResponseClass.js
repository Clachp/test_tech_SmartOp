class Response {
    constructor(name,
        speciality,
        interventionScore,
        favoriteAnesth,
        favortiNurse,
        favoriteRoom,
        favoriteAct) {
           this.name = name;
           this.speciality = speciality;
           this.interventionScore = nterventionScore;
           this.favoriteAnesth = favoriteAnesth;
           this.favoriteNurse = favoriteNurse;
           this.favoriteRoom = favoriteRoom;
           this.favoriteAct = favoriteAct;
        }
   
}

module.exports = Response;