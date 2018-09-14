import { Component, OnInit } from '@angular/core';
import { Perk, StatsPerk } from '../models/perk';

import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'app-perk-recombobulator',
  templateUrl: './perk-recombobulator.component.html',
  styleUrls: ['./perk-recombobulator.component.css']
})
export class PerkRecombobulatorComponent implements OnInit {

  T1Perks: Perk[];
  T2Perks: Perk[];
  T3Perks: Perk[];
  T4Perks: Perk[];
  T5Perks: Perk[];
  T6Perks: Perk[];



  constructor() { 


  }

  ngOnInit() {
  }

}
