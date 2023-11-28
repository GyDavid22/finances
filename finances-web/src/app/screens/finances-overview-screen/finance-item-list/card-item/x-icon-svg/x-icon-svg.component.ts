import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-x-icon-svg',
  templateUrl: './x-icon-svg.component.html',
  styleUrls: ['./x-icon-svg.component.css']
})
export class XIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
