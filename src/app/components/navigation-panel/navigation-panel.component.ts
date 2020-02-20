import { Component, OnInit } from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {
  playMusic: boolean = false;
  selectedLanguage = 'en';
  constructor(private _mainService: MainServiceService) {
  }

  ngOnInit(): void {

  }

  openAboutMe(): void {
    this._mainService.showAboutMe.next(true);
  }

  openAboutSkills(): void {
    this._mainService.showAboutSkills.next(true);
  }

  openAboutProjects(): void {
    this._mainService.showAboutProjects.next(true);
  }

  openContact(): void {
    this._mainService.showContact.next(true);
  }

  toggleMusic(music, type): void {
    if (type) {
      music.play();
      this.playMusic = type;
    } else {
      music.pause();
      this.playMusic = type;
    }
  }
  enterToWelcomeScreenFn(data: boolean): void {
    this._mainService.enterToApp.next(data);
  }
  changeLanguageFn(lang): void {
    this.selectedLanguage = lang;
    this._mainService.translate.use(lang);
    this._mainService.selectedLang.next(lang);
  }
}
