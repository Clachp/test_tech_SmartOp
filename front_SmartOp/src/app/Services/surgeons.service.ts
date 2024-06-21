import { Injectable } from "@angular/core";
import { Surgeon } from "../models/surgeon";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cacheable, LocalStorageStrategy } from "ts-cacheable"

@Injectable({
    providedIn: 'root'
})
export class SurgeonsService {

    constructor(private http: HttpClient) {}

    @Cacheable({ storageStrategy: LocalStorageStrategy })
    getAllSurgeons(): Observable<Surgeon[]> {
        return this.http.get<Surgeon[]>('http://localhost:3300/api/surgeons')
    }

    getSurgeonByName(surgeonName: string): Observable<Surgeon[]> {
        return this.http.get<Surgeon[]>(`http://localhost:3300/api/surgeon/${surgeonName}`)
    }
}