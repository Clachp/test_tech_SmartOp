import { Component, Input, OnInit } from '@angular/core';
import { Surgeon } from '../models/surgeon';
import { Intervention } from '../models/intervention';
import { NgClass, NgStyle } from '@angular/common';
import { InterventionsService, SurgeonsService } from '../Services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-surgeon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './single-surgeon.component.html',
  styleUrl: './single-surgeon.component.scss'
})
export class SingleSurgeonComponent implements OnInit{
  surgeon!: Surgeon;
  @Input() interventionTab!: Intervention[];

  constructor(private interventionsService: InterventionsService,
    private surgeonsService: SurgeonsService,
    private route: ActivatedRoute,
    private router: Router) {}
  
  ngOnInit(): void {
    const getId = this.route.snapshot.paramMap.get('id');
    if (!getId)
      throw new Error("surgeonId not found");
    this.surgeon = this.surgeonsService.getSurgeonById(getId.toString());
    // if (this.surgeon.name == "Colin")
      this.interventionTab = this.interventionsService.getInterventions();
  }

  AddSnap(): void {
    this.surgeonsService.onSnap(this.surgeon.snap, this.surgeon.id)
  }  

  private getSurgeon(surgeonId: number): void {
  //  const Id = this.route.snapshot.params['id'];
  //   console.log("surgoen id : ", surgeonId)
  //   this.surgeon = this.surgeonsService.getSurgeonById(surgeonId.toString());
  }

  // onView() {
  //   console.log("view id: ", this.surgeon.id)
  //   this.router.navigateByUrl(`surgeons/${this.surgeon.id}`);
  //   //this.router.navigate(['/surgeons', this.surgeon.id]);
  // }
  
}
