import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[component-host]',
})
export class ComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}