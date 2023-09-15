import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsGetEmailComponent } from './readings-get-email.component';

describe('ReadingsGetEmailComponent', () => {
  let component: ReadingsGetEmailComponent;
  let fixture: ComponentFixture<ReadingsGetEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingsGetEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingsGetEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
