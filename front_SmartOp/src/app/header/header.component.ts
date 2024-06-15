import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle, NgClass, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title!: string;
  logo!: string;
  isClicked!: boolean;

  ngOnInit(): void {
    this.isClicked = false;
    this.title = "Smart'Op";
    this.logo = "https://smartop.io/smartop-logo.svg";
  }

  onClickSearch():void {
    this.isClicked = true;
  }
}
