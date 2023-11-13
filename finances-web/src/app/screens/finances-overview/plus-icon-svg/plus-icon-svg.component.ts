import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plus-icon-svg',
  templateUrl: './plus-icon-svg.component.html',
  styleUrls: ['./plus-icon-svg.component.css']
})
export class PlusIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
