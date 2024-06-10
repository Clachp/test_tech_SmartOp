import { Component, OnInit } from '@angular/core';
import { SurgeonProfileComponent } from '../surgeon-profile/surgeon-profile.component';
import { Surgeon } from '../models/surgeon';

@Component({
  selector: 'app-surgeon-list',
  standalone: true,
  imports: [SurgeonProfileComponent],
  templateUrl: './surgeon-list.component.html',
  styleUrl: './surgeon-list.component.scss'
})
export class SurgeonListComponent implements OnInit {
  surgeonTab!: Surgeon[];

  ngOnInit(): void {
    // TODO : get all surgeon 
    this.surgeonTab = [
      new Surgeon(
        1,
        "Chapon",
        "sage-femme",
        0,
        "Snap it"
      ),
      new Surgeon(
        2,
        "Colin",
        "gynécologue",
        3,
        "Snap it"
      )
    ];
  }
}
