import { Component, OnInit } from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private _mainService: MainServiceService) { }

  ngOnInit(): void {
  }
  showMenuPanel(): void {
    this._mainService.showMenuPanel.next(true);
  }
}
