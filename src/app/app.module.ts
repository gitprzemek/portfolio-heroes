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
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http : HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationPanelComponent,
    MainPanelComponent,
    ActionFieldComponent,
    AboutMeComponent,
    AboutSkillsComponent,
    AboutProjectsComponent,
    ContactComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
