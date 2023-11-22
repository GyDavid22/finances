import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-icon-svg',
  templateUrl: './warning-icon-svg.component.html',
  styleUrls: ['./warning-icon-svg.component.css']
})
export class WarningIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
