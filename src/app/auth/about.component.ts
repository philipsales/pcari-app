
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  _show: boolean;
  @Input() set show(value: boolean) {
    console.warn(this._show);
    this._show = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
