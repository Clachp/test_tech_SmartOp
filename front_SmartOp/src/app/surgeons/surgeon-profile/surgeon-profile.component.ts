import { Component, Input, OnInit, Output } from '@angular/core';
import { Surgeon } from '../../core/models/surgeon';
import { Intervention } from '../../core/models/intervention';
import { NgClass, NgStyle } from '@angular/common';
import { InterventionsService, SurgeonsService } from '../../core/services';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; 
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-surgeon-profile',
  templateUrl: './surgeon-profile.component.html',
  styleUrl: './surgeon-profile.component.scss'
})
export class SurgeonProfileComponent implements OnInit{
  @Input() surgeon!: Surgeon;
  properties!: [string, any][];

  @Output() rowData: object[] = [];

  rowObj!: object;


  constructor(
    private router: Router) {}
  
  ngOnInit(): void {
    // this.properties = Object.entries(this.surgeon);
    this.rowObj = this.surgeon;
    this.rowData.push(this.rowObj);
  } 

  onView() {
    this.router.navigateByUrl(`surgeons/${this.surgeon.name}`);
  }
  
}
