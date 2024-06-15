import { Component, OnInit } from '@angular/core';
import { SurgeonProfileComponent } from '../surgeon-profile/surgeon-profile.component';
import { Surgeon } from '../models/surgeon';
import { SurgeonsService } from '../Services/surgeons.service';
import { Intervention } from '../models/intervention';

@Component({
  selector: 'app-surgeon-list',
  standalone: true,
  imports: [SurgeonProfileComponent],
  templateUrl: './surgeon-list.component.html',
  styleUrl: './surgeon-list.component.scss'
})
export class SurgeonListComponent implements OnInit {
  surgeonTab!: Surgeon[];
  
  constructor(private surgeonsService: SurgeonsService) {}

  ngOnInit(): void {
   this.surgeonTab = this.surgeonsService.getSurgeons();
  }
}
