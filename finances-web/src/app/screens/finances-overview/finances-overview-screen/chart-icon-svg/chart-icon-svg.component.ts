import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-icon-svg',
  templateUrl: './chart-icon-svg.component.html',
  styleUrls: ['./chart-icon-svg.component.css']
})
export class ChartIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
