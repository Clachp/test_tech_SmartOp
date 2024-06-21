export class Surgeon {

    constructor(
        public id: number,
        public name: string,
        public specialty: string,
        public numberOfInterventions: number,
        public favoriteAnesthesiste: string,
        public favoriteNurse: string,
        public favoriteRoom: string,
        public favoriteIntervention: string,
    ) {}

}