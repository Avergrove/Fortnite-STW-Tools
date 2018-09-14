import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeaponStatsComponent } from './weapon-stats/weapon-stats.component';
import { PerkRecombobulatorComponent } from './perk-recombobulator/perk-recombobulator.component';
import { PerkListComponent } from './perk-list/perk-list.component';
import { PerkCalculatorComponent } from './perk-calculator/perk-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponStatsComponent,
    PerkRecombobulatorComponent,
    PerkListComponent,
    PerkCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
