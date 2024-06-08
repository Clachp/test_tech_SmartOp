import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ChirProfileComponent } from './chir-profile/chir-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ChirProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
