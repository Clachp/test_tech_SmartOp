import { Injectable } from "@angular/core";
import { Surgeon } from "../models/surgeon";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SurgeonsService {

    constructor(private http: HttpClient) {}

    getAllSurgeons(): Observable<Surgeon[]> {
        return this.http.get<Surgeon[]>('http://localhost:3300/api/surgeons')
    }

    getSurgeonByName(surgeonName: string): Observable<Surgeon[]> {
        return this.http.get<Surgeon[]>(`http://localhost:3300/api/surgeon/${surgeonName}`)
    }

    onSnap(snapInit: number, surgeonId: number):void {
        console.log(`surgoeonId nubmer: ${surgeonId}; tostring : ${surgeonId.toString()}`);
        // const found = this.getSurgeonById(surgeonId.toString())
        // found!.onClickSnap(snapInit);
    }
}