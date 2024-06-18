import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  //standalone: true,
  //imports: [NgStyle, NgClass, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo!: string;
  isClicked!: boolean;
  surgeonName!: string

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isClicked = false;
    this.logo = "https://smartop.io/smartop-logo.svg";
  }

  toggleClick(): void {
    this.isClicked ? 
    this.isClicked = false : 
    this.isClicked = true;
  } 

  onClickSearch():void {
    this.toggleClick();
    this.router.navigateByUrl('surgeons/:id')
  }

  onSubmit(form: NgForm): void {
    this.router.navigateByUrl(`surgeons/${form.value.surgeonName}`)
  }
}
