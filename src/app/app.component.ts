import { Component } from '@angular/core';

@Component({
  selector: 'mat-slide-confirm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MatSlideConfirm';

  onConfirm() {
    console.log('Confirmed');
  }
}
