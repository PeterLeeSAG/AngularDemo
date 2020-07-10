import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MaterialYarn } from 'src/app/models/materialYarn';
import { Material } from 'src/app/models/material';
import { Company } from 'src/app/models/company';
import { ReducerHelper } from 'src/app/share/reducer-helper'

@Component({
  selector: 'app-material-yarn-item',
  templateUrl: './material-yarn-item.component.html',
  styleUrls: ['./material-yarn-item.component.css']
})
export class MaterialItemComponent implements OnInit {
  @Input() index: number;
  @Input() materialYarn: MaterialYarn; //immuntable matYarn from the list
  @Output() result = new EventEmitter<{"posID":number, "action":string}>(); //Send posID and action
  @Output() matYarnItemUpdated = new EventEmitter<{"listID":number, "matYarn": MaterialYarn}>(); //Send the updated MatYarn Item

  public shipmentMethods: [{id:number, name:string}];
  public currencyList: [{id:number, name:string}];
  public itemMaterialYarn: MaterialYarn; //self editable matYarn object
  public reducerHelper: ReducerHelper;

  constructor() { 
    this.prepareShipmentMethods();
    this.prepareCurrencyList();
  }

  ngOnInit(): void {
    this.reducerHelper = new ReducerHelper();
    this.itemMaterialYarn = this.reducerHelper.bestCopyEver(this.materialYarn);
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

  private updateMatYarnInfo()
  {
    //TODO: validate the matYarn first
    this.matYarnItemUpdated.emit({ listID: this.index, matYarn: this.itemMaterialYarn});
  }

  //Actions in the material yarn item
  onDeleteMatYarn(index: number)
  {
    this.result.emit({"posID":index,"action":"remove"});
    this.updateMatYarnInfo();
  }

  onCopyMatYarn(index: number)
  {
    this.result.emit({"posID":index,"action":"copy"});
  }

  onMaterialSelected(material: Material)
  {
    console.log(material);
    if (material != undefined)
    {
      this.itemMaterialYarn.material = material;
      this.updateMatYarnInfo();
    }
  }

  onThreadCountInputted(count: number)
  {
    this.itemMaterialYarn.threadCount = count;
    this.updateMatYarnInfo();
  }

  onSupplierSelected(supplier: Company)
  {
    console.log(supplier);
    if (supplier != undefined)
    {
      this.itemMaterialYarn.supplier = supplier;
      this.updateMatYarnInfo();
    }
  }

  onArticleInputted(text: string)
  {
    this.itemMaterialYarn.article = text;
    console.log("article input:" + text);
    this.updateMatYarnInfo();
  }

  onRemarkInputted(text: string)
  {
    this.itemMaterialYarn.remark = text;
    this.updateMatYarnInfo();
  }

  onSupplierCurrIDUpdate(id: number)
  {
    this.itemMaterialYarn.supplierCurrID = id;
    this.updateMatYarnInfo();
  }

  onSupplierPriceUpdate(price: number)
  {
    this.itemMaterialYarn.supplierUnitPrice = price;
    this.updateMatYarnInfo();
  }

  onSupplierWeightTypeUpdate(id: number)
  {
    this.itemMaterialYarn.supplierWeightTypeId = id;
    this.updateMatYarnInfo();
  }

  onFinalPriceCheckBoxUpdate(isChecked: boolean)
  {
    this.itemMaterialYarn.isFinalPrice = isChecked;
    this.updateMatYarnInfo();
  }

  onTransportMethodUpdate(id: number)
  {
    this.itemMaterialYarn.supplierTransportTypeId = id;
    this.updateMatYarnInfo();
  }
  
  onBuyerCurrIDUpdate(id: number)
  {
    this.itemMaterialYarn.buyerCurrID = id;
    this.updateMatYarnInfo();
  }

  onBuyerPriceUpdate(price: number)
  {
    this.itemMaterialYarn.buyerUnitPrice = price;
    this.updateMatYarnInfo();
  }

  onBuyerWeightTypeUpdate(id: number)
  {
    this.itemMaterialYarn.buyerWeightType = id;
    this.updateMatYarnInfo();
  }
}
