import { Injectable } from "@angular/core";
import { Surgeon } from "../models/surgeon";

@Injectable({
    providedIn: 'root'
})
export class SurgeonsService {
    private surgeons: Surgeon[] = [
        new Surgeon(
            1,
            "Chapon",
            "sage-femme",
            0,
            "Snap it",
            false
          ),
          new Surgeon(
            2,
            "Colin",
            "gynécologue",
            3,
            "Snap it",
            false
          )
    ]

    getSurgeons(): Surgeon[] {
        return [...this.surgeons]
    }

    getSurgeonById(surgeonId: number): Surgeon {
        console.log(surgeonId)
        const found: Surgeon | undefined = this.surgeons.find(
            (surg : Surgeon) => surg.id == surgeonId)
        if (!found)
            throw new Error('Surgeon not found');
        return found;
    }

    onSnap(snapInit: number, surgeonId: number):void {
        const surgeon: Surgeon | undefined = this.surgeons.find(
            (surg : Surgeon) => surg.id == surgeonId)
        if (!surgeon)
                throw new Error('Surgeon not found');
        surgeon!.onClickSnap(snapInit);
    }
}