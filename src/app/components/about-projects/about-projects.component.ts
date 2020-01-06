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
  constructor(private _mainServiceService: MainServiceService) { }

  ngOnInit() {
  }
  closeWindow(): void {
    this._mainServiceService.showAboutProjects.next(false);
  }
}
