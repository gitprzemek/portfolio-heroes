import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  showAboutMe: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showAboutProjects: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showAboutSkills: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showContact: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
