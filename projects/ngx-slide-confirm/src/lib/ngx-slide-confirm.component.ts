import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CdkDragDrop, CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ngx-slide-confirm',
  templateUrl: './ngx-slide-confirm.component.html',
  styleUrls: ['./ngx-slide-confirm.component.scss']
})
export class NgxSlideConfirmComponent {

  @Input() color: string;
  @Input() hint = '';
  @Input() class = '';

  @Output() confirm = new EventEmitter<void>();

  isConfirmed = false;

  // Template Helpers
  opacity = 1;

  constructor() { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      this.isConfirmed = true;
      this.opacity = 0;
      this.confirm.emit();
    } else {
      this.reset();
    }
  }

  reset() {
    this.isConfirmed = false;
    this.opacity = 1;
  }

  handleMove(event: CdkDragMove) {
    if (this.opacity >= 0 && this.opacity <= 1) {
      if (event.delta.x === 1) {
        this.opacity -= 0.01;
      } else if (event.delta.x === -1) {
        this.opacity += 0.01;
      }
    }
  }

}
