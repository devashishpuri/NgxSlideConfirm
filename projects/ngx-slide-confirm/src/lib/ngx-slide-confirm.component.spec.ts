import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSlideConfirmComponent } from './ngx-slide-confirm.component';

describe('NgxSlideConfirmComponent', () => {
  let component: NgxSlideConfirmComponent;
  let fixture: ComponentFixture<NgxSlideConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSlideConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSlideConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
