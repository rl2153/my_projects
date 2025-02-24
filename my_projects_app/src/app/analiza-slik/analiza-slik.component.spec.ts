import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizaSlikComponent } from './analiza-slik.component';

describe('AnalizaSlikComponent', () => {
  let component: AnalizaSlikComponent;
  let fixture: ComponentFixture<AnalizaSlikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalizaSlikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalizaSlikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
