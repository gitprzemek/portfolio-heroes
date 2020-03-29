import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  showAboutMe: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showAboutProjects: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showAboutSkills: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showContact: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  showMenuPanel: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  enterToApp: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  selectedLang: BehaviorSubject<string> = new BehaviorSubject<string>('en');

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
  }
}
