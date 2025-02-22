import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpoProjectComponent } from './tpo-project.component';

describe('TpoProjectComponent', () => {
  let component: TpoProjectComponent;
  let fixture: ComponentFixture<TpoProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpoProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
