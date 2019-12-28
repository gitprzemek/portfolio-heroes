import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { ActionFieldComponent } from './components/action-field/action-field.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationPanelComponent,
    MainPanelComponent,
    ActionFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
