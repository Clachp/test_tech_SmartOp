import { Component, Input, OnInit } from '@angular/core';
import { Surgeon } from '../models/surgeon';
import { Intervention } from '../models/intervention';
import { NgClass, NgStyle } from '@angular/common';
import { InterventionsService, SurgeonsService } from '../Services';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-surgeon-profile',
  templateUrl: './surgeon-profile.component.html',
  styleUrl: './surgeon-profile.component.scss'
})
export class SurgeonProfileComponent implements OnInit{
  @Input() surgeon!: Surgeon;


  constructor(
    private surgeonsService: SurgeonsService,
    private router: Router) {}
  
  ngOnInit(): void {
    console.log("Init surgeon-profile : ", this.surgeon)
  }

  // AddSnap(): void {
  //   this.surgeonsService.onSnap(this.surgeon.snap, this.surgeon.id)
  // }  

  // private getSurgeon(surgeonId: number): void {
  //  // const surgeonId = this.route.snapshot.params['id'];
  //   console.log("surgoen id : ", surgeonId)
  //   this.surgeon = this.surgeonsService.getSurgeonById(surgeonId.toString());
  // }

  onView() {
    console.log("view id: ", this.surgeon.name)
    this.router.navigateByUrl(`surgeons/${this.surgeon.name}`);
   // this.router.navigate(['/surgeons', this.surgeon.id]);
  }
  
}
