import { Component, OnInit } from '@angular/core';
import { Combo } from "./combo";
import { Order } from "./order";
import { ComboOrderDetail } from "./comboOrderDetail";

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
pOrderID = 0;
pComboID = 0;

  constructor() { }

  ngOnInit(): void {
    this.onInitCreateData();
  }

  onInitCreateData()
  {
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
  }

  onAddCombo(comboID: number)
  {
    this.combos.splice(comboID, 0, {"id":comboID,"code":"NEW","chineseName":"","englishName":""});
    this.updateComboCodes();
    this.updateComboOrderDetail("add","combo",comboID);
  }

  onRemoveCombo(comboID: number)
  {
    this.combos.splice(comboID-1, 1);
    this.updateComboCodes();
    this.updateComboOrderDetail("remove","combo",comboID);
  }

  onComboUpdate(combo: Combo)
  {
    console.log(combo.id);
  }

  onAddOrder(orderID: number)
  {
    this.orders.splice(orderID, 0, {"id":orderID,"code":"A","name":"NEW","matType":0,"isFtyMixed":false});
    this.updateOrderCodes();
    this.updateComboOrderDetail("add","order",orderID);
  }

  onRemoveOrder(orderID: number)
  {
    this.orders.splice(orderID-1, 1);
    this.updateOrderCodes();
    this.updateComboOrderDetail("remove","order",orderID);
  }

  onAddMatFtyOrder(orderID: number)
  {
    this.orders.splice(orderID, 0, {"id":orderID,"code":"A","name":"NEW","matType":0,"isFtyMixed":true});
  }

  onOrderUpdate(order: Order)
  {
    console.log(order.id);
  }

  onToggleMixedMat(orderID: number)
  {
    this.orders[orderID-1].isFtyMixed = !(this.orders[orderID-1].isFtyMixed);
    //console.log("toggle mix mat type in yarn order parent @ order #" + orderID);
  }

  getComboOrderDetail(comboID: number, orderID: number)
  {
    var result = this.comboOrderDetails.find( e => 
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
    this.orders.forEach(function(value, index){
      value.code = (index + 1).toString();
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
        this.combos.forEach(combo => { 
          var detail = new ComboOrderDetail(combo.id, id+1);
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
}
