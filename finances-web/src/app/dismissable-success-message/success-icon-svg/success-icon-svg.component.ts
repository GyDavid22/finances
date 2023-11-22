import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-icon-svg',
  templateUrl: './success-icon-svg.component.html',
  styleUrls: ['./success-icon-svg.component.css']
})
export class SuccessIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
