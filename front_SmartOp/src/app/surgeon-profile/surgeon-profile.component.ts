import { Component, Input, OnInit } from '@angular/core';
import { Surgeon } from '../models/surgeon';
import { Intervention } from '../models/intervention';
import { NgClass, NgStyle } from '@angular/common';
import { InterventionsService, SurgeonsService } from '../Services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-surgeon-profile',
  standalone: true,
  imports: [NgClass],
  templateUrl: './surgeon-profile.component.html',
  styleUrl: './surgeon-profile.component.scss'
})
export class SurgeonProfileComponent implements OnInit{
  @Input() surgeon!: Surgeon;
  @Input() interventionTab!: Intervention[];

  constructor(private interventionsService: InterventionsService,
    private surgeonsService: SurgeonsService,
    private route: ActivatedRoute,
    private router: Router) {}
  
  ngOnInit(): void {
    if (this.surgeon.name == "Colin")
      this.interventionTab = this.interventionsService.getInterventions(); // getIntervention where 
    
    this.getSurgeon();
  }

  AddSnap(): void {
    this.surgeonsService.onSnap(this.surgeon.snap, this.surgeon.id)
  }  

  private getSurgeon(): void {
    const surgeonId = +this.route.snapshot.params['id'];
    console.log("surgoen id : ", surgeonId)
    this.surgeon = this.surgeonsService.getSurgeonById(surgeonId);
  }

  onView() {
    this.router.navigateByUrl(`surgeons/${this.surgeon.id}`);
  }
  
}
