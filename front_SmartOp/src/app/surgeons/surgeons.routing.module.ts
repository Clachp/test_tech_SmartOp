import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SurgeonListComponent } from "./surgeon-list/surgeon-list.component";
import { SingleSurgeonComponent } from "./single-surgeon/single-surgeon.component";

export const routes: Routes = [
    { path: '', component: SurgeonListComponent },
    { path: ':name', component: SingleSurgeonComponent },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ], 
})
export class SurgeonsRoutingModule {}