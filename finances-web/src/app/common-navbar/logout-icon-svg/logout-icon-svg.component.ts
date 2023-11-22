import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logout-icon-svg',
  templateUrl: './logout-icon-svg.component.html',
  styleUrls: ['./logout-icon-svg.component.css']
})
export class LogoutIconSvgComponent {
  @Input() width: string = "";
  @Input() height: string = "";
}
