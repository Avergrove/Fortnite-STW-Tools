import { Component, OnInit } from '@angular/core';
import { Perk, StatsPerk } from '../models/perk';

import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'app-perk-recombobulator',
  templateUrl: './perk-recombobulator.component.html',
  styleUrls: ['./perk-recombobulator.component.css']
})
export class PerkRecombobulatorComponent implements OnInit {

  tierToDisplay: number = 1;

  T1Perks: Perk[];
  T2Perks: Perk[];
  T3Perks: Perk[];
  T4Perks: Perk[];
  T5Perks: Perk[];
  T6Perks: Perk[];



  constructor() { 
    this.T1Perks = [];
    this.T1Perks.push(new StatsPerk("Damage Up", Constants.TEXT_PERK_DAMAGE_BONUS, 1, 5, Constants.STATS_DAMAGE, 10));

    
    this.T2Perks = [];
    this.T2Perks.push(new StatsPerk("Crit Up", Constants.TEXT_PERK_CRIT_RATING, 1, 5, Constants.STATS_CRIT_CHANCE, 10));
  }

  ngOnInit() {
  }

  generatePerks($event: number){
    this.tierToDisplay = $event;
  }

}
