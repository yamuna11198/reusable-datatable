import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableMatTableComponent } from './reusable-mat-table.component';

describe('ReusableMatTableComponent', () => {
  let component: ReusableMatTableComponent;
  let fixture: ComponentFixture<ReusableMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableMatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
