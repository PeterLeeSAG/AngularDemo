import { Component, OnInit } from '@angular/core';
import { Combo } from "../models/combo";
import { Order } from "../models/order";
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
orders = [];
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

    this.combos = [
      {"id":1,"code":"A","chineseName":"紅色","englishName":"Red"},
      {"id":2,"code":"B","chineseName":"綠色","englishName":"Green"},
      {"id":3,"code":"C","chineseName":"白色","englishName":"White"},
      {"id":4,"code":"D","chineseName":"黑色","englishName":"Black"}
    ];
    
    this.orders = [
      {"id":1,"code":"1","name":"身衫1色","matType":0,"isFtyMixed":false},
      {"id":2,"code":"2","name":"身衫2色","matType":0,"isFtyMixed":false},
      {"id":3,"code":"3","name":"身衫3色","matType":0,"isFtyMixed":false},
      {"id":4,"code":"4","name":"身衫4色","matType":0,"isFtyMixed":false}
    ];

    this.combos.forEach(combo => {
      this.orders.forEach(order => { 
        var detail = new ComboOrderDetail(combo.id, order.id);
        this.comboOrderDetails.push(detail);
        })
    });

    this.updateMaxIDs();
  }

  updateMaxIDs()
  {
    //get the max id within the combo & order array
    this.currComboID = Math.max.apply(Math, this.combos.map(function(combo){return combo.id}));
    this.currOrderID = Math.max.apply(Math, this.orders.map(function(order){return order.id}));
  }

  getComboPosition(comboID: number)
  {
    return this.combos.findIndex(combo => combo.id === comboID);
  }

  getOrderPosition(orderID: number)
  {
    return this.orders.findIndex(order => order.id === orderID);
  }

  checkNextRefID(orderID: number)
  {
    var nextPos = this.getOrderPosition(orderID)+1;
    if (nextPos < this.orders.length)
    {
      return this.orders[nextPos].refID;
    }
    else
    {
      return null;
    }
  }

  onAddCombo(comboID: number)
  {
    this.currComboID++;
    var newComboID = this.currComboID;
    this.combos.splice(this.getComboPosition(comboID), 0, {"id":newComboID,"code":"NEW","chineseName":"","englishName":""});
    this.updateComboCodes();
    this.updateComboOrderDetail("add","combo", newComboID); 
  }

  onPushCombo()
  {
    this.currComboID++;
    var newComboID = this.currComboID;
    this.combos.push({"id":newComboID,"code":"NEW","chineseName":"","englishName":""});
    this.updateComboCodes();
    this.updateComboOrderDetail("add","combo", newComboID); 
  }

  onRemoveCombo(comboID: number)
  {
    this.combos.splice(this.getComboPosition(comboID), 1);
    this.updateComboCodes();
    this.updateComboOrderDetail("remove","combo",comboID);
  }

  onComboUpdate(combo: Combo)
  {
    console.log(combo.id);
  }

  onStyleInfoUpdate(styleInfo: StyleInfo)
  {
    console.log("Update to style name: " + styleInfo.factoryStyleNumber);
  }

  onAddOrder(orderID: number)
  {
    this.currOrderID++;
    var newOrderID = this.currOrderID;
    this.orders.splice(this.getOrderPosition(orderID), 0, {"id":newOrderID,"code":"A","name":"NEW","matType":0,"isFtyMixed":false});
    this.updateOrderCodes();
    this.updateComboOrderDetail("add","order", newOrderID);
  }

  onPushOrder()
  {
    //Add at last element
    this.currOrderID++;
    var newOrderID = this.currOrderID;
    this.orders.push({"id":newOrderID,"code":"A","name":"NEW","matType":0,"isFtyMixed":false});
    this.updateOrderCodes();
    this.updateComboOrderDetail("add","order", newOrderID);
  }

  onRemoveOrder(orderID: number)
  {
    this.orders.splice(this.getOrderPosition(orderID), 1);
    this.updateOrderCodes();
    this.updateComboOrderDetail("remove","order",orderID);
  }

  onAddMatFtyOrder(orderID: number)
  {
    this.currOrderID++;
    var newOrderID = this.currOrderID;
    var currPos = this.getOrderPosition(orderID);
    var targetPos = null; //find the fall records if the isFtyMixed = false & mixRefId != currPos

    // for (let index = currPos; index < this.orders.length; index++) {
    //   const order = this.orders[index];
    //   if (order.isFtyMixed == false && order.mixRefId != orderID && targetPos == null)
    //   {
    //     targetPos = index;
    //   }
    // }

    let index: number = currPos;
    do {
        const order = this.orders[index];
        console.log("loop statement on order ID " + order.id + " execution no." + index );
        if (order.isFtyMixed == false && order.mixRefId != orderID)
        {
          targetPos = index;
        }
        index++;
    } while ( index < this.orders.length && targetPos == null)

    //insert after the mixed mat
    this.orders.splice(targetPos, 0, {"id":newOrderID,"code":"A","name":"NEW","matType":0,"isFtyMixed":true,"refID":orderID});
    this.updateOrderCodes();
    this.updateComboOrderDetail("add","order",newOrderID);
  }

  onOrderUpdate(order: Order)
  {
    console.log(order.id);
  }

  onToggleMixedMat(orderID: number)
  {
    this.orders[this.getOrderPosition(orderID)].isFtyMixed = !(this.orders[this.getOrderPosition(orderID)].isFtyMixed);
    //console.log("toggle mix mat type in yarn order parent @ order #" + orderID);
    this.updateOrderCodes();
  }

  getComboOrderDetail(comboID: number, orderID: number)
  {
    var result = this.comboOrderDetails
    .find( e => 
      e.comboID === comboID && 
      e.orderID === orderID);
    return result;
  }

  updateComboCodes()
  {
    this.combos.forEach(function(value, index){
      value.code = String.fromCharCode(65 + index);
    })
  }

  updateOrderCodes()
  {
    var currIndex = 1;
    var subCount = 0;
    const orderCount = this.orders.length;
    const tempOrders = this.orders;
    this.orders.forEach(function(value, index)
    {
      value.code = currIndex.toString();
      if (value.isFtyMixed)
      {
        value.code = value.code + String.fromCharCode(65 + subCount);
        subCount++;
      }
      else
      {
        subCount=0;
      }

      if (index < orderCount - 1 )
      {      
        if (!value.isFtyMixed || 
            !tempOrders[index+1].isFtyMixed)
        {
          currIndex++;
        }
      }

    })
  }

  updateComboOrderDetail(mode: string, target: string, id: number)
  {
    if (target == 'combo')
    {
      if (mode == 'add')
      {
        this.orders.forEach(order => { 
          var detail = new ComboOrderDetail(id, order.id);
          this.comboOrderDetails.push(detail);
        });
      }
      else if (mode == 'remove')
      {
        for (let index = 0; index < this.comboOrderDetails.length; index++) {
          const element = this.comboOrderDetails[index];
          if (element.comboID == id)
          {
            this.comboOrderDetails.splice(index, 1); 
          }
        }
      }
    }
    else if (target == 'order')
    {
      if (mode == 'add')
      {
        //add the new details
        this.combos.forEach(combo => { 
          var detail = new ComboOrderDetail(combo.id, id);
          this.comboOrderDetails.push(detail);
        });
      }
      else if (mode == 'remove')
      {
        for (let index = 0; index < this.comboOrderDetails.length; index++) {
          const element = this.comboOrderDetails[index];
          if (element.orderID == id)
          {
            this.comboOrderDetails.splice(index, 1); 
          }
        }
      }
    }
  }

  onComboMoveLeft(id: number)
  {
    this.moveCombo(id, "left");
  }

  onComboMoveRight(id: number)
  {
    this.moveCombo(id, "right");
  }

  onOrderMoveUp(id: number)
  {
    this.moveOrder(id, "up");
  }

  onOrderMoveDown(id: number)
  {
    this.moveOrder(id, "down");
  }

  moveCombo(comboID : number, direction : string)
  {
    var targetComboIndex = this.getComboPosition(comboID);

    if (direction == "left")
    {
      if (targetComboIndex > 0)
      {
        var tempCombo = this.combos[targetComboIndex-1];
        this.combos[targetComboIndex-1] = this.combos[targetComboIndex];
        this.combos[targetComboIndex] = tempCombo;
      }
    }
    else if (direction == "right")
    { 
      if (targetComboIndex < this.combos.length-1)
      {
        var tempCombo = this.combos[targetComboIndex+1];
        this.combos[targetComboIndex+1] = this.combos[targetComboIndex];
        this.combos[targetComboIndex] = tempCombo;
      }
    }

    this.updateComboCodes();
  }

  moveOrder(orderID: number, direction : string)
  {
    var targetOrderIndex = this.getOrderPosition(orderID);

    if (direction == "up")
    {
      if (targetOrderIndex > 0)
      {
        var tempOrder = this.orders[targetOrderIndex-1];
        this.orders[targetOrderIndex-1] = this.orders[targetOrderIndex];
        this.orders[targetOrderIndex] = tempOrder;
      }
    }
    else if (direction == "down")
    {
      if (targetOrderIndex < this.orders.length-1)
      {
        var tempOrder = this.orders[targetOrderIndex+1];
        this.orders[targetOrderIndex+1] = this.orders[targetOrderIndex];
        this.orders[targetOrderIndex] = tempOrder;
      }
    }

    this.updateOrderCodes();
  }
}
