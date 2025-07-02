import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Surgeon } from '../../core/models/surgeon';
import { Intervention } from '../../core/models/intervention';
import { NgClass, NgStyle } from '@angular/common';
import { InterventionsService, SurgeonsService } from '../../core/services';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';

@Component({
  selector: 'app-single-surgeon',
  templateUrl: './single-surgeon.component.html',
  styleUrl: './single-surgeon.component.scss'
})
export class SingleSurgeonComponent implements OnInit {
  surgeon$!: Observable<Surgeon[]>
  @Input() interventionTab!: Intervention[];
  defaultSurgeon!: Surgeon;
  // name!: string;


  constructor(
    private interventionsService: InterventionsService,
    private surgeonsService: SurgeonsService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    // const name = this.route.snapshot.params['name'];
    this.route.paramMap.subscribe(params => {
      const name = params.get('name')
      if (!name)
        throw new Error("no surgeon name");
      this.interventionTab = this.interventionsService.getInterventions();
      this.surgeonsService.surgeonSub.pipe(take(1)).subscribe(val => this.defaultSurgeon = val);
      // this.surgeonsService.getDefaultSurgeon();
      console.log(this.defaultSurgeon)
      this.surgeon$ = this.surgeonsService.getSurgeonByName(name);
      }
    )    
  }

}
