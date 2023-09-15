import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutsDashboardComponent } from './nuts-dashboard.component';

describe('NutsDashboardComponent', () => {
  let component: NutsDashboardComponent;
  let fixture: ComponentFixture<NutsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
