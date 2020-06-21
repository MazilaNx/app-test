import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingJsonComponent } from './processing-json.component';

describe('ProcessingJsonComponent', () => {
  let component: ProcessingJsonComponent;
  let fixture: ComponentFixture<ProcessingJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
