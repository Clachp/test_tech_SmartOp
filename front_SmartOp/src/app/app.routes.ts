import { Routes } from '@angular/router';
import { SurgeonListComponent } from './surgeon-list/surgeon-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SurgeonProfileComponent } from './surgeon-profile/surgeon-profile.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'surgeons', component: SurgeonListComponent },
    { path: 'surgons/:id', component: SurgeonProfileComponent }
];
