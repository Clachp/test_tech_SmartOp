import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurgeonListComponent } from './surgeon-list/surgeon-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SurgeonProfileComponent } from './surgeon-profile/surgeon-profile.component';
import { SingleSurgeonComponent } from './single-surgeon/single-surgeon.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'surgeons', component: SurgeonListComponent },
    { path: 'surgeons/:name', component: SingleSurgeonComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
