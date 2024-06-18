import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SurgeonListComponent } from './surgeon-list/surgeon-list.component';
import { SurgeonProfileComponent } from './surgeon-profile/surgeon-profile.component';
import { SingleSurgeonComponent } from './single-surgeon/single-surgeon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    SurgeonListComponent,
    SurgeonProfileComponent,
    SingleSurgeonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}


