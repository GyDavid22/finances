import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-icon-svg',
  templateUrl: './person-icon-svg.component.html',
  styleUrls: ['./person-icon-svg.component.css']
})
export class PersonIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
