import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";
import {gsap} from "gsap"
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss'],
  animations: [
    trigger('slideWall', [
      transition('* => *', [
        style({ transform: "translateX(0)", zIndex: "0" , offset: 0 }),
        animate("1.6s", keyframes([
          style({ transform: "translateX(-102%)", zIndex: "9999" , offset: 0 }),
          style({ transform: "translateX(0)", zIndex: "9999" , offset: 0.42 }),
          style({ transform: "translateX(0)", zIndex: "9999" , offset: 0.58 }),
          style({ transform: "translateX(-102%)", zIndex: "9999" , offset: 1 }),
        ]))
      ])
    ]),
    trigger('slideWall2', [
      transition('* => *', [
        style({ transform: "translateX(0)", zIndex: "0" , offset: 0 }),
        animate("1.6s", keyframes([
          style({ transform: "translateX(102%)", zIndex: "9999" , offset: 0 }),
          style({ transform: "translateX(0)", zIndex: "9999" , offset: 0.42 }),
          style({ transform: "translateX(0)", zIndex: "9999" , offset: 0.58 }),
          style({ transform: "translateX(102%)", zIndex: "9999" , offset: 1 }),
        ]))
      ])
    ]),
  ],
})
export class WelcomeScreenComponent implements OnInit {
  enterToApp = false;
  showWall = null;
  @ViewChild('svgImage', {static: false}) childId:ElementRef;

  constructor(private _mainServiceService: MainServiceService) { }

  ngOnInit() {
    console.log(this.showWall);
    this._mainServiceService.enterToApp.subscribe( res => {
      this.enterToApp = res;
    });
    this._mainServiceService.showWall.subscribe( res => {
      this.showWall = res;
      console.log(res);
    })
  }
  showWallFn(): void {
    this._mainServiceService.showWall.next('run');
  }
  enterToAppFn(data: boolean): void {
    this._mainServiceService.enterToApp.next(data);
    // gsap.fromTo("#svgImage", {scale:1}, {scale:8, duration: 3});
    // gsap.fromTo("#svgImage", {scale: 1}, {duration: 2, scale: 9, ease: "expoScale(1, 9, power2.inOut)"});

    // let tl = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0.3}),
    //   circle = document.getElementById("firstPath");
  //
  //   // tl.to(circle, {morphSVG:"#secondPath"}, "+=1")
  //   //   .to(circle, {morphSVG:"#thirdPath"}, "+=1")
  //   //   .to(circle, {morphSVG:circle}, "+=1")
  // tl.to(circle, 1.3, { attr: { morphSVG:"#secondPath"}, ease: Back.easeInOut})
  // .to(circle, 1.3, { attr: { morphSVG:"#thirdPath"}, ease: Back.easeInOut})

    // let tlMorph = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0.3})
    //
    // tlMorph
    //   .to('#firstPath', 1, {morphSVG: {shape: '#secondPath'}})
  }

}
