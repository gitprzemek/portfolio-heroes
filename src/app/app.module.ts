import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { ActionFieldComponent } from './components/action-field/action-field.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutSkillsComponent } from './components/about-skills/about-skills.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { ContactComponent } from './components/contact/contact.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavigationPanelComponent,
    MainPanelComponent,
    ActionFieldComponent,
    AboutMeComponent,
    AboutSkillsComponent,
    AboutProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
