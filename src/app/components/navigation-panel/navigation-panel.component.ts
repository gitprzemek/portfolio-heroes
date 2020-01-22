import { Component, OnInit } from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {
  playMusic: boolean = false;
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

  toggleMusic(music, type): void {
    if (type) {
      music.play();
      this.playMusic = type;
    } else {
      music.pause();
      this.playMusic = type;
    }
  }
}
