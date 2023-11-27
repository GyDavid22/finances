import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-arrow-icon-svg',
  templateUrl: './right-arrow-icon-svg.component.html',
  styleUrls: ['./right-arrow-icon-svg.component.css']
})
export class RightArrowIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
