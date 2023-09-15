import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadonInfoComponent } from './radon-info.component';

describe('RadonInfoComponent', () => {
  let component: RadonInfoComponent;
  let fixture: ComponentFixture<RadonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadonInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
