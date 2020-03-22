import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPanelComponent implements OnInit {

  constructor(private _mainServiceService: MainServiceService) {
  }

  ngOnInit(): void {
  }

  openAboutMe(): void {
    this._mainServiceService.showAboutMe.next(true);
  }

  openAboutSkills(): void {
    this._mainServiceService.showAboutSkills.next(true);
  }

  openAboutProjects(): void {
    this._mainServiceService.showAboutProjects.next(true);
  }

  openContact(): void {
    this._mainServiceService.showContact.next(true);
  }
}
