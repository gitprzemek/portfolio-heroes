import { Component, OnInit } from '@angular/core';
import {MainServiceService} from "../../shared/services/main-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  showMessageSuccess: boolean = false;
  showMessageError: boolean = false;
  constructor(private _mainServiceService: MainServiceService,
              private http: HttpClient) { }

  ngOnInit(): void {
  }

  closeWindow(): void {
    this._mainServiceService.showContact.next(false);
  }
  onSubmit(form): void {
    console.log(form);
    if (form.form.valid) {
      form.reset();
      form.submitted = false;
      this.showMessageError = false;
      this.showMessageSuccess = true;
      // this.http.post('https://formspree.io/xjvyljap', form);
    } else {
      this.showMessageSuccess = false;
      this.showMessageError = true;
    }
  }

}
