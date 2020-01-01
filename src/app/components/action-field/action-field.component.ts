import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-action-field',
  templateUrl: './action-field.component.html',
  styleUrls: ['./action-field.component.scss']
})
export class ActionFieldComponent implements OnInit {
  @Input() type: string;
  @Input() content: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
