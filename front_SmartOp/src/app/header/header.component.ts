import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title!: string;
  logo!: string;

  ngOnInit(): void {
    this.title = "Smart'Op";
    this.logo = "./smartop-logo.svg";
  }
}
