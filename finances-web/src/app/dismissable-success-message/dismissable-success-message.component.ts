import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dismissable-success-message',
  templateUrl: './dismissable-success-message.component.html',
  styleUrls: ['./dismissable-success-message.component.css']
})
export class DismissableSuccessMessageComponent {
  @Input() message: string = "";
  @Input() set show(val: boolean) {
    let box = document.getElementById(this.boxId);
    if (val) {
      if (box) {
        box.classList.remove("d-none");
        box.classList.add("show");
      }
    } else {
      if (box) {
        (async (box: HTMLElement) => {
          box.classList.remove("show");
          await new Promise(r => setTimeout(r, 150));
          box.classList.add("d-none");
        })(box);
      }
    }
  }
  @Input() boxId: string = "error-msg-box";
  @Output() showChange = new EventEmitter<boolean>();

  public hideButtonHandler(e: Event) {
    e.preventDefault();
    this.showChange.emit(false);
  }
}
