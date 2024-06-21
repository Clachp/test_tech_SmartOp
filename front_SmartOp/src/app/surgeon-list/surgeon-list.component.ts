import { Component, OnInit } from '@angular/core';
import { SurgeonProfileComponent } from '../surgeon-profile/surgeon-profile.component';
import { Surgeon } from '../models/surgeon';
import { SurgeonsService } from '../Services/surgeons.service';
import { Intervention } from '../models/intervention';
import { NgClass, NgFor } from '@angular/common';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { ColDef } from 'ag-grid-community'; 
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-surgeon-list',
  templateUrl: './surgeon-list.component.html',
  styleUrl: './surgeon-list.component.scss'
})
export class SurgeonListComponent implements OnInit {
  surgeons$!: Observable<Surgeon[]>

  colDefs: ColDef[] = [
    { field: "name" },
    { field: "specialty" },
    { field: "numberOfInterventions" },
    { field: "favoriteAnesthesiste" },
    { field: "favoriteNurse" },
    { field: "favoriteRoom" },
    { field: "favoriteIntervention" }
  ];

  rowDataSub = new BehaviorSubject<object[]>([
    {name: "GHUIN",
    specialty: "Ophtalmologie",
    numberOfInterventions: 2,
    favoriteAnesthesiste: "MARCADAL",
    favoriteNurse: "Marceline",
    favoriteRoom: "8",
    favoriteIntervention: "ECTROPION Droit"},
  ]);
  rowData$ = this.rowDataSub.asObservable();

  constructor(private surgeonsService: SurgeonsService) {}

  ngOnInit(): void {
    this.surgeons$ = this.surgeonsService.getAllSurgeons().pipe(
      tap((surgeons: Surgeon[]) => {
        const currentData = this.rowDataSub.value;
        this.rowDataSub.next([...currentData, ...surgeons]);
        console.log(surgeons);
      })
      
    );
    this.surgeons$.subscribe();
  }
}
