import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Perk, StatsPerk, ElementPerk } from 'src/app/models/perk';
import { Constants } from 'src/app/models/constants';

import { StwService} from 'src/app/stw-service.service'

@Component({
  selector: 'app-perk-list',
  templateUrl: './perk-list.component.html',
  styleUrls: ['./perk-list.component.css']
})
export class PerkListComponent implements OnInit {

  perks : Perk[];

  @Output() 
  onPerkSlotSelectEvent = new EventEmitter<number>();


  constructor( private stwService: StwService) {
    
  }

  onPerkSlotSelect(tier: number){
    this.onPerkSlotSelectEvent.emit(tier);
  }

  getPerks(): void{
    this.perks = this.stwService.getSelectedWeapon().perks;
  }


  ngOnInit() {
    this.getPerks();
  }

}
