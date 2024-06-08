import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chir-profile',
  standalone: true,
  imports: [],
  templateUrl: './chir-profile.component.html',
  styleUrl: './chir-profile.component.scss'
})
export class ChirProfileComponent implements OnInit{
  name!: string;
  specialty!: string;

  ngOnInit(): void {
    this.name = "CHAPON";
    this.specialty = "sage-femme"; 
  }
}
