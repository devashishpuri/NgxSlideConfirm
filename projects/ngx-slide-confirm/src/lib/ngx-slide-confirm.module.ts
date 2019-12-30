import { NgModule } from '@angular/core';
import { NgxSlideConfirmComponent } from './ngx-slide-confirm.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NgxSlideConfirmComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [NgxSlideConfirmComponent]
})
export class NgxSlideConfirmModule { }
