import { Component, Input, OnInit } from '@angular/core';
import { Surgeon } from '../models/surgeon';
import { Intervention } from '../models/intervention';
import { NgClass, NgStyle } from '@angular/common';
import { InterventionsService, SurgeonsService } from '../Services';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-surgeon',
  templateUrl: './single-surgeon.component.html',
  styleUrl: './single-surgeon.component.scss'
})
export class SingleSurgeonComponent implements OnInit{
  surgeon$!: Observable<Surgeon[]>
  @Input() interventionTab!: Intervention[];

  constructor(private interventionsService: InterventionsService,
    private surgeonsService: SurgeonsService,
    private route: ActivatedRoute,
    private router: Router) {}
  
  ngOnInit(): void {
    const name = this.route.snapshot.params['name'];
    if (!name)
      throw new Error("surgeonId not found");
    this.surgeon$ = this.surgeonsService.getSurgeonByName(name);
    this.surgeon$.subscribe(surgeon => {
      console.log(surgeon)});
    // if (this.surgeon.name == "Colin")
      this.interventionTab = this.interventionsService.getInterventions();
  }

  AddSnap(): void {
    // this.surgeonsService.onSnap(this.surgeon$.snap, this.surgeon$.id)
  }  

  private getSurgeon(surgeonId: number): void {
  //  const Id = this.route.snapshot.params['id'];
  //   console.log("surgoen id : ", surgeonId)
  //   this.surgeon = this.surgeonsService.getSurgeonById(surgeonId.toString());
  }

}
