import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnUploadComponent } from './btn-upload.component';

xdescribe('NotificationMessageComponent', () => {
  let component: BtnUploadComponent;
  let fixture: ComponentFixture<BtnUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
