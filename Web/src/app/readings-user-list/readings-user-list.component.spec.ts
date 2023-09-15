import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsUserListComponent } from './readings-user-list.component';

describe('ReadingsUserListComponent', () => {
  let component: ReadingsUserListComponent;
  let fixture: ComponentFixture<ReadingsUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingsUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingsUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
