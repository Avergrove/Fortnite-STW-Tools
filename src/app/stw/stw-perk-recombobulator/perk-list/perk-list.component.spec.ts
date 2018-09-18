import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerkListComponent } from './perk-list.component';

describe('PerkListComponent', () => {
  let component: PerkListComponent;
  let fixture: ComponentFixture<PerkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
