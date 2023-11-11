import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-icon-svg',
  templateUrl: './check-icon-svg.component.html',
  styleUrls: ['./check-icon-svg.component.css']
})
export class CheckIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
