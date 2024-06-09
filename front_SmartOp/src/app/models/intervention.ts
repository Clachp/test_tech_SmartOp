export class Intervention {
    nurse2?: string;

    constructor(public id: number,
        public name: string,
        public speciality: string,
        public anesthesiste: string,
        public nurse1: string,
        public roomNumber: number
    ) {}

    setNurse2(nurse2: string): void {
        this.nurse2 = nurse2;
    }
}