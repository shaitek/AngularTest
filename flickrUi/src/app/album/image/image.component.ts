import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() results: Array<any>;
  @Input() type: string;
  constructor() {

  }

  ngOnInit() {

  }


}
