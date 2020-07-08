import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.css']
})
export class MaterialItemComponent implements OnInit {

  public shipmentMethods: [{id:number, name:string}];
  public currencyList: [{id:number, name:string}];

  constructor() { 
    this.prepareShipmentMethods();
    this.prepareCurrencyList();
  }

  ngOnInit(): void {
  }

  //TODO: add the new services class for the following data
  private prepareShipmentMethods() : void
  {
    this.shipmentMethods = [{"id":0, "name":"包增值稅發票，包運費。"}];    
    this.shipmentMethods.push({"id":1, "name":"包增值稅發票，不包運費。"});
    this.shipmentMethods.push({"id":2, "name":"不包增值稅發票，包運費。"});
    this.shipmentMethods.push({"id":3, "name":"經保稅區到廠，包進出口報關操作費及運費"});
    this.shipmentMethods.push({"id":4, "name":"經保稅區到廠，包進出口報關操作費,不包運費"});
    this.shipmentMethods.push({"id":5, "name":"直送香港"});
    this.shipmentMethods.push({"id":6, "name":"直送香港 (空運)"});
    this.shipmentMethods.push({"id":7, "name":"CIF Cambodia by Sea"});
    this.shipmentMethods.push({"id":8, "name":"CIF Cambodia by Air"});
    this.shipmentMethods.push({"id":9, "name":"FOB China"});
    this.shipmentMethods.push({"id":10, "name":"FOB HK"});
    this.shipmentMethods.push({"id":11, "name":"直送柬埔寨廠, 包運費"});
    this.shipmentMethods.push({"id":12, "name":"直送柬埔寨廠, 不含運費"});
  }

  private prepareCurrencyList() : void
  {
    this.currencyList = [{"id":0, "name":"USD"}];
    this.currencyList.push({"id":1, "name":"HKD"});
    this.currencyList.push({"id":2, "name":"RMB"});
  }
}
