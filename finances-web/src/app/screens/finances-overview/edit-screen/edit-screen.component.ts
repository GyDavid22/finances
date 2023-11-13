import { Component, Input } from '@angular/core';
import { FinanceItem } from 'src/app/Entities';

@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.css']
})
export class EditScreenComponent {
  @Input() itemToEdit: FinanceItem | undefined;
}
