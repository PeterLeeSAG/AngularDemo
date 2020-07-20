import { Component, OnInit } from '@angular/core';
import { Combo } from "../models/combo";
import { ColorOrder } from "../models/colorOrder";
import { ComboOrderDetail } from "../models/comboOrderDetail";
import { StyleInfo } from "../models/styleInfo";
import { retry } from 'rxjs/operators';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-yarn-order',
  templateUrl: './yarn-order.component.html',
  styleUrls: ['./yarn-order.component.css']
})
export class YarnOrderComponent implements OnInit {
info = ['1','2','3','4'];
combos = [];
colorOrders = [];
comboOrderDetails = [];
styleInfo: StyleInfo;
currOrderID = 0;
currComboID = 0;
alertOptions = {
  autoClose: true,
  keepAfterRouteChange: true,
  showSeconds: 10,
  topPadding: 65
};

  constructor(public alertService: AlertService) { }

  ngOnInit(): void {
    this.onInitCreateData();
  } 

  onInitCreateData()
  {
    //Initial the testing data model
    this.styleInfo = new StyleInfo("Test", 0); //{"factoryStyleNo":"TEST", "calculationTypeId":0};
    this.styleInfo.factoryStyleNumber = "Test";
  }

}
