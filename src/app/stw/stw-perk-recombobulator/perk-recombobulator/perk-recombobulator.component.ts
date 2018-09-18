import { Component, OnInit } from '@angular/core';
import { Perk, StatsPerk } from 'src/app/models/perk';

import { Constants } from 'src/app/models/constants';
import { StwService } from 'src/app/stw-service.service';

@Component({
  selector: 'app-perk-recombobulator',
  templateUrl: './perk-recombobulator.component.html',
  styleUrls: ['./perk-recombobulator.component.css']
})
export class PerkRecombobulatorComponent implements OnInit {

  selectedTier: number;
  perks : Perk[];



  constructor(private stwService: StwService) { 

   }

  ngOnInit() {
  }

  generatePerks($event: number){
    this.selectedTier = $event;
    this.perks = this.stwService.getTierPerks($event, Constants.WEAPON_ASSAULT);
  }

}
