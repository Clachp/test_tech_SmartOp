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
  

  ngOnInit(): void {
    this.isClicked = false;
    }
  
  onSnap(snapInit: number):void {
    this.surgeon.onClickSnap(snapInit);
    this.isClicked = true;
  }

  setNurse(nurse: string) {
    this.intervention.setNurse2(nurse);
  }
    

}
