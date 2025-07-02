import { Injectable } from "@angular/core";
import { Intervention } from "../models/intervention";

@Injectable({
    providedIn: 'root'
})
export class InterventionsService {
    private Interventions: Intervention[] = [
        new Intervention(
            1,
            "colposcopie",
            "gynécologie",
            "Jean",
            "Marinette",
            4
          ).withNurse2("Marceline"),
        new Intervention(
            2,
            "radioscopie",
            "radiologie",
            "Charlie",
            "Yoyo",
            8
          )
    ]
   
    getInterventions(): Intervention[] {
        return [...this.Interventions]
    }
}