import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dismissable-error-message',
  templateUrl: './dismissable-error-message.component.html',
  styleUrls: ['./dismissable-error-message.component.css']
})
export class DismissableErrorMessageComponent {
  @Input() message: string = "";
}
