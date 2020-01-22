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
  showMessageErrorPost = '';
  constructor(private _mainServiceService: MainServiceService,
              private http: HttpClient) { }

  ngOnInit(): void {
  }

  closeWindow(): void {
    this._mainServiceService.showContact.next(false);
  }
  onSubmit(form): void {
    console.log(form);
    const formObj = JSON.stringify(form.value);
    if (form.form.valid) {
      form.reset();
      form.submitted = false;
      this.http.post('https://formspree.io/xjvyljap', formObj).subscribe(
        data => {
          this.showMessageError = false;
          this.showMessageSuccess = true;
          this.showMessageErrorPost = '';
        },
        error => {
          console.log(error);
          this.showMessageSuccess = false;
          this.showMessageError = false;
          this.showMessageErrorPost = error.status;
        }
      );
    } else {
      this.showMessageSuccess = false;
      this.showMessageError = true;
      this.showMessageErrorPost = '';
    }
  }

}
