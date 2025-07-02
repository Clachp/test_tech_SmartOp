import { Injectable } from "@angular/core";
import { Surgeon } from "../models/surgeon";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject, catchError, of, tap } from "rxjs";
import { Cacheable, LocalStorageStrategy } from "ts-cacheable"

@Injectable({
    providedIn: 'root'
})
export class SurgeonsService {

    surgeonSub = new BehaviorSubject<Surgeon>(
        {
          id: 1,
          name: "GHUIN",
          specialty: "Ophtalmologie",
          numberOfInterventions: 2,
          favoriteAnesthesiste: "MARCADAL",
          favoriteNurse: "Marceline",
          favoriteRoom: "8",
          favoriteIntervention: "ECTROPION Droit"
        },
      );
    rowDataSub = new BehaviorSubject<Surgeon[]>([])
    isSurgeonsExistsSub = new Subject<boolean>();
    isSurgeonsExists: boolean = false;

    constructor(private http: HttpClient) {}

    @Cacheable({ storageStrategy: LocalStorageStrategy })
    getAllSurgeons(): Observable<Surgeon[]> {
        return this.http.get<Surgeon[]>('http://localhost:3300/api/surgeons')
    }

    getSurgeonByName(surgeonName: string): Observable<Surgeon[]> {
        if (!surgeonName) return of([]);

        return this.http.get<Surgeon[]>(`http://localhost:3300/api/surgeon/${surgeonName}`).pipe(
            tap(surgeons => {
                this.isSurgeonsExistsSub.subscribe(val => this.isSurgeonsExists = val);
                surgeons ? this.isSurgeonsExistsSub.next(true) : this.isSurgeonsExistsSub.next(false);
            }),
            catchError(err => { 
                console.error('[SurgeonService] API error:', err);
                return of([]);
            })
        );
    }

    getDefaultSurgeon(): void {
       this.surgeonSub.next(this.rowDataSub.value[0])
    }

    getIsSurgeonExists(): boolean {
        return this.isSurgeonsExists;
    }

}