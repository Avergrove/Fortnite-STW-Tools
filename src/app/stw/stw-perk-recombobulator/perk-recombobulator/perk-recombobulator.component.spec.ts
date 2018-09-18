import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerkRecombobulatorComponent } from './perk-recombobulator.component';

describe('PerkRecombobulatorComponent', () => {
  let component: PerkRecombobulatorComponent;
  let fixture: ComponentFixture<PerkRecombobulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerkRecombobulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerkRecombobulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
