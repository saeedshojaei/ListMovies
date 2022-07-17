import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationMovieComponent } from './information-movie.component';

describe('InformationMovieComponent', () => {
  let component: InformationMovieComponent;
  let fixture: ComponentFixture<InformationMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
