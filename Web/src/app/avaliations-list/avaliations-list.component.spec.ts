import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliationsListComponent } from './avaliations-list.component';

describe('AvaliationsListComponent', () => {
  let component: AvaliationsListComponent;
  let fixture: ComponentFixture<AvaliationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliationsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
