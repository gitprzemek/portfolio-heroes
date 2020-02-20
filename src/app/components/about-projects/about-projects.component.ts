import { Component, OnInit } from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";
import {AboutProjects} from "../../shared/content/AboutProjects";

@Component({
  selector: 'app-about-projects',
  templateUrl: './about-projects.component.html',
  styleUrls: ['./about-projects.component.scss']
})
export class AboutProjectsComponent implements OnInit {
  projectsData = AboutProjects;
  selectedLanguage = 'en';
  constructor(private _mainService: MainServiceService) { }

  ngOnInit() {
    this._mainService.selectedLang.subscribe( res => {
      this.selectedLanguage = res;
    });
  }
  closeWindow(): void {
    this._mainService.showAboutProjects.next(false);
  }
}
