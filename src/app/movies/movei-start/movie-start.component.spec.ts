import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveiStartComponent } from './movie-start.component';

describe('MoveiStartComponent', () => {
  let component: MoveiStartComponent;
  let fixture: ComponentFixture<MoveiStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveiStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveiStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
