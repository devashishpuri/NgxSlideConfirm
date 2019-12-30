import { TestBed } from '@angular/core/testing';

import { NgxSlideConfirmService } from './ngx-slide-confirm.service';

describe('NgxSlideConfirmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSlideConfirmService = TestBed.get(NgxSlideConfirmService);
    expect(service).toBeTruthy();
  });
});
