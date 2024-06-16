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

    getSurgeonById(surgeonId: string): Surgeon {
        console.log(surgeonId)
        console.log(`surgoeonId string ${surgeonId}; to int : ${+surgeonId}`);
        const found: Surgeon | undefined = this.surgeons.find(
            (surg : Surgeon) => surg.id == +surgeonId)
        if (!found)
            throw new Error('Surgeon not found');
        return found;
    }

    onSnap(snapInit: number, surgeonId: number):void {
        console.log(`surgoeonId nubmer: ${surgeonId}; tostring : ${surgeonId.toString()}`);
        const found = this.getSurgeonById(surgeonId.toString())
        found!.onClickSnap(snapInit);
    }
}