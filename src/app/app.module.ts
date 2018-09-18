import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { WeaponStatsComponent } from './general/weapon-stats/weapon-stats.component';
import { PerkRecombobulatorComponent } from './stw/stw-perk-recombobulator/perk-recombobulator/perk-recombobulator.component';
import { PerkListComponent } from './stw/stw-perk-recombobulator/perk-list/perk-list.component'
import { PerkCalculatorComponent } from './stw/stw-perk-recombobulator/perk-calculator/perk-calculator.component';
import { HeaderComponent } from './header/header.component';
import { BrItemShopComponent } from './br/br-item-shop/br-item-shop.component';
import { ComponentDirective } from './ComponentDirective';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StwPerkRecombobulatorComponent } from './stw/stw-perk-recombobulator/stw-perk-recombobulator.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponStatsComponent,
    PerkRecombobulatorComponent,
    PerkListComponent,
    PerkCalculatorComponent,
    HeaderComponent,
    BrItemShopComponent,
    ComponentDirective,
    StwPerkRecombobulatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ BrItemShopComponent, StwPerkRecombobulatorComponent ]
})
export class AppModule { }
