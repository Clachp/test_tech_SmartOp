import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurgeonListComponent } from './surgeon-list/surgeon-list.component';
import { SurgeonProfileComponent } from './surgeon-profile/surgeon-profile.component';
import { SingleSurgeonComponent } from './single-surgeon/single-surgeon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { SurgeonsRoutingModule } from './surgeons.routing.module';



@NgModule({
  declarations: [
    SurgeonListComponent,
    SurgeonProfileComponent,
    SingleSurgeonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgGridAngular,
    SurgeonsRoutingModule
  ],
  exports: [
    SurgeonListComponent,
    SurgeonProfileComponent,
    SingleSurgeonComponent
  ]
})
export class SurgeonsModule { }
