import {Component, OnInit} from '@angular/core';
import {MainServiceService} from "./shared/services/main-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showAboutMe: boolean = false;
  showAboutProjects: boolean = false;
  showAboutSkills: boolean = false;
  showContact: boolean = false;

  constructor(private _mainServiceService: MainServiceService) {


  }

  ngOnInit(): void {
    this._mainServiceService.showAboutMe.subscribe( res => {
      this.showAboutMe = res;
    });
    this._mainServiceService.showAboutProjects.subscribe( res => {
      this.showAboutProjects = res;
    });
    this._mainServiceService.showAboutSkills.subscribe( res => {
      this.showAboutSkills = res;
    });
    this._mainServiceService.showContact.subscribe( res => {
      this.showContact = res;
    });
  }
}
