import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitReadingComponent } from './submit-reading.component';

describe('SubmitReadingComponent', () => {
  let component: SubmitReadingComponent;
  let fixture: ComponentFixture<SubmitReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitReadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
