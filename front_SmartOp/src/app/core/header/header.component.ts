import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isClicked!: boolean;
  surgeonName = new FormControl('', Validators.required);


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isClicked = false;
  }

  toggleClick(): void {
    this.isClicked = !this.isClicked;   
  } 

  onClickSearch():void {
    this.toggleClick();
    this.router.navigateByUrl('surgeons/:id')
  }

  onSubmit(): void {
    this.router.navigateByUrl(`surgeons/${this.surgeonName.value?.toUpperCase()}`)
    this.surgeonName.setValue('');
  }
}
