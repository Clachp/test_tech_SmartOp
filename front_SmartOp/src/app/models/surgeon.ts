export class Surgeon {
    constructor(public id: number,
        public name: string,
        public speciality: string,
        public snap: number,
        public buttonTitle: string,
    ) {}

    onClickSnap(snapInit: number): void {
        if (this.buttonTitle == "Snap it" && this.snap == snapInit) {
          this.snap++;
          this.buttonTitle = "Oh Snap!"; 
        }
        else {
            this.snap--;
            this.buttonTitle = "Snap it"; 
        }
           
      }
}