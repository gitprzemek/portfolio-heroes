import { Component, OnInit } from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private _mainServiceService: MainServiceService) { }

  ngOnInit(): void {
  }
  closeWindow(): void {
    this._mainServiceService.showAboutMe.next(false);
  }
}
