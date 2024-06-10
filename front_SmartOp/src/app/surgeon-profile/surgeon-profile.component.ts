import { Component, Input, OnInit } from '@angular/core';
import { Surgeon } from '../models/surgeon';
import { Intervention } from '../models/intervention';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-surgeon-profile',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './surgeon-profile.component.html',
  styleUrl: './surgeon-profile.component.scss'
})
export class SurgeonProfileComponent implements OnInit{
  @Input() surgeon!: Surgeon;
  @Input() intervention!: Intervention;
  isClicked!: boolean;
  oneIntervention!: Intervention;
  secondIntervention!: Intervention;
  
  ngOnInit(): void {
    this.isClicked = false;
    this.oneIntervention = new Intervention(
      1,
      "colposcopie",
      "gynécologie",
      "Jean",
      "Marinette",
      4
    )
    this.secondIntervention = new Intervention(
      2,
      "radioscopie",
      "radiologie",
      "Charlie",
      "Yoyo",
      8
    )
    this.oneIntervention.setNurse2("Josianne");    
  }
  
  onSnap(snapInit: number):void {
    this.surgeon.onClickSnap(snapInit);
    this.isClicked = true;
  }

  setNurse(nurse: string) {
    this.intervention.setNurse2(nurse);
  }
  
}
