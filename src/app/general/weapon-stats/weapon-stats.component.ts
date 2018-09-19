import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weapon } from 'src/app/models/weapon';
import { StwService} from 'src/app/stw-service.service';


@Component({
  selector: 'app-weapon-stats',
  templateUrl: './weapon-stats.component.html',
  styleUrls: ['./weapon-stats.component.css']
})
export class WeaponStatsComponent implements OnInit {

  @Input() weapon: Weapon;
  
  @Input() currentDamage: number;
  @Input() currentHeadshotDamage: number;
  @Input() currentCritChance: number;
  @Input() currentCritDamage: number;

  description: string;
  modDisplay: boolean;  // Determines whether to show modified stats.

  @Output() statsChangeEvent = new EventEmitter<Weapon>();

  constructor(private stwService: StwService) { 
  }

  ngOnInit() {
    this.weapon = this.stwService.getSelectedWeapon();
    this.modDisplay = true;
  }
}
