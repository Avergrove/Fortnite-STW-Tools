import { Component, ViewContainerRef, Input, ComponentFactoryResolver, ViewChild, Injector, ApplicationRef } from '@angular/core';
import { Directive} from '@angular/core';
import { BrItemShopComponent } from './br/br-item-shop/br-item-shop.component';
import { ComponentDirective } from './ComponentDirective';
import { StwPerkRecombobulatorComponent } from './stw/stw-perk-recombobulator/stw-perk-recombobulator.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {



  @ViewChild(ComponentDirective) componentHost : ComponentDirective;
  title = 'fortnite-tools';


  constructor(
    private componentFactoryResolver : ComponentFactoryResolver
  ){};
 
  loadComponents(argument : string){

    var componentFactory;

    switch(argument){
      case 'stw-perk-recombobulator':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(StwPerkRecombobulatorComponent);
        break;

      case 'br-item-shop':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(BrItemShopComponent);
      
      
    }

    let viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);

  }

}



