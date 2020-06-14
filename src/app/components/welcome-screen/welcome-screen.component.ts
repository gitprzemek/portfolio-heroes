import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";
import {slideLeftAnimation} from "../../shared/animations/slideLeftWall";
import {slideRightAnimation} from "../../shared/animations/slideRightWall";
@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss'],
  animations: [slideLeftAnimation, slideRightAnimation]
})
export class WelcomeScreenComponent implements OnInit {
  enterToApp = false;
  showWall = null;
  isIEOrEdge = false;
  @ViewChild('svgImage', {static: false}) childId:ElementRef;

  constructor(private _mainServiceService: MainServiceService) { }

  ngOnInit() {
    this._mainServiceService.enterToApp.subscribe( res => {
      this.enterToApp = res;
    });
    this._mainServiceService.showWall.subscribe( res => {
      this.showWall = res;
    });
    this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
  }
  showWallFn(): void {
    this._mainServiceService.showWall.next('run');
  }
  enterToAppFn(data: boolean): void {
    this._mainServiceService.enterToApp.next(data);
  }

}
