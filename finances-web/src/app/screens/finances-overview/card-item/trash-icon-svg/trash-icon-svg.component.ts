import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trash-icon-svg',
  templateUrl: './trash-icon-svg.component.html',
  styleUrls: ['./trash-icon-svg.component.css']
})
export class TrashIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
