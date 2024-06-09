import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SurgeonProfileComponent } from './surgeon-profile/surgeon-profile.component';
import { Surgeon } from './models/surgeon';
import { Intervention } from './models/intervention';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SurgeonProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  surgeonTab!: Surgeon[];
  oneIntervention!: Intervention;
  secondIntervention!: Intervention;

  ngOnInit(): void {
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
}
