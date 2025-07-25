export class Intervention {
    nurse2?: string;

    constructor(public id: number,
        public name: string,
        public specialty: string,
        public anesthesiste: string,
        public nurse1: string,
        public roomNumber: number
    ) {}

    setNurse2(nurse2: string): void {
        this.nurse2 = nurse2;
    }

    withNurse2(nurse2: string): Intervention {
        this.setNurse2(nurse2);
        return this;
    }
}