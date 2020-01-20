import { Component, OnInit } from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _mainServiceService: MainServiceService) { }

  ngOnInit(): void {
  }

  closeWindow(): void {
    this._mainServiceService.showContact.next(false);
  }

}
