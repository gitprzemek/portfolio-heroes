import {Component, HostListener, OnInit} from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.scss']
})
export class AboutSkillsComponent implements OnInit {
  heightPercent: number = 0;
  widthPercent: number = 0;
  textFromLogo: string = '';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    const height = (e.clientY / e.view.innerHeight) * 100;
    this.heightPercent = 49 + ((height / 100) * 4);
    const width = (e.clientX / e.view.innerWidth) * 100;
    this.widthPercent = 46 + ((width / 100) * 10);
  }
  constructor(private _mainServiceService: MainServiceService) { }

  ngOnInit(): void {
  }
  closeWindow(): void {
    this._mainServiceService.showAboutSkills.next(false);
  }
  passTextToInput(text): void {
    this.textFromLogo = text;
  }
}
