import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichemaladeComponent } from './fichemalade.component';

describe('FichemaladeComponent', () => {
  let component: FichemaladeComponent;
  let fixture: ComponentFixture<FichemaladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichemaladeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichemaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
