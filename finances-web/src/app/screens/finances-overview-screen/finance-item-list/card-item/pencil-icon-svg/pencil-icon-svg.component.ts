import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pencil-icon-svg',
  templateUrl: './pencil-icon-svg.component.html',
  styleUrls: ['./pencil-icon-svg.component.css']
})
export class PencilIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
