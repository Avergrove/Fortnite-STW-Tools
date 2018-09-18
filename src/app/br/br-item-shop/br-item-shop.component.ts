import { Component, OnInit } from '@angular/core';
import { BrService } from 'src/app/br-service.service';

@Component({
  selector: 'app-br-item-shop',
  templateUrl: './br-item-shop.component.html',
  styleUrls: ['./br-item-shop.component.css']
})
export class BrItemShopComponent implements OnInit {

  text: string;

  constructor(private brService: BrService) { }

  ngOnInit() {
    this.brService.getItemShopItems().subscribe(text => this.text = text);
  }



}
