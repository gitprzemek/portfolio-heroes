import { Component, OnInit } from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {
  enterToApp = false;
  constructor(private _mainServiceService: MainServiceService) { }

  ngOnInit() {
    this._mainServiceService.enterToApp.subscribe( res => {
      this.enterToApp = res;
    });
  }

  enterToAppFn(data: boolean): void {
    this._mainServiceService.enterToApp.next(data);
  }

}
