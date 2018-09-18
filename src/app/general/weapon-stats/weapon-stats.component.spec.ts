import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponStatsComponent } from './weapon-stats.component';

describe('WeaponStatsComponent', () => {
  let component: WeaponStatsComponent;
  let fixture: ComponentFixture<WeaponStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
