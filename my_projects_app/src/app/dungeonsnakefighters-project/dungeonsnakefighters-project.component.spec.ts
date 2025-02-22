import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonsnakefightersProjectComponent } from './dungeonsnakefighters-project.component';

describe('DungeonsnakefightersProjectComponent', () => {
  let component: DungeonsnakefightersProjectComponent;
  let fixture: ComponentFixture<DungeonsnakefightersProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DungeonsnakefightersProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DungeonsnakefightersProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
