import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-arrow-icon-svg',
  templateUrl: './left-arrow-icon-svg.component.html',
  styleUrls: ['./left-arrow-icon-svg.component.css']
})
export class LeftArrowIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
