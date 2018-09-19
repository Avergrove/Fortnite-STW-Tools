import { Component, OnInit } from '@angular/core';
import { BrService } from 'src/app/br-service.service';
import { ItemStore } from '../../models/itemStore';


@Component({
  selector: 'app-br-item-shop',
  templateUrl: './br-item-shop.component.html',
  styleUrls: ['./br-item-shop.component.css']
})
export class BrItemShopComponent implements OnInit {



  itemStore: ItemStore;
  debugText: string;
  config;

  constructor(private brService: BrService) { }

  ngOnInit() {
    this.brService.getItemShopItems().subscribe((data : ItemStore) => {
      this.itemStore = data;
      this.itemStore.items[0].item.image
      
    });

  }
}
