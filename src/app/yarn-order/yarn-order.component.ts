import { Component, OnInit } from '@angular/core';
import { Combo } from "./combo";
import { Order } from "./order";
import { ComboOrderDetail } from "./comboOrderDetail";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

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
currOrderID = 0;
currComboID = 0;

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

  getOrderPostion(orderID: number)
  {
    return this.orders.findIndex(order => order.id === orderID);
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

  onAddOrder(orderID: number)
  {
    this.currOrderID++;
    var newOrderID = this.currOrderID;
    this.orders.splice(this.getOrderPostion(orderID), 0, {"id":newOrderID,"code":"A","name":"NEW","matType":0,"isFtyMixed":false});
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
    this.orders.splice(this.getOrderPostion(orderID), 1);
    this.updateOrderCodes();
    this.updateComboOrderDetail("remove","order",orderID);
  }

  onAddMatFtyOrder(orderID: number)
  {
    this.currOrderID++;
    var newOrderID = this.currOrderID;
    //insert after the mixed mat
    this.orders.splice(this.getOrderPostion(orderID)+1, 0, {"id":newOrderID,"code":"A","name":"NEW","matType":0,"isFtyMixed":true});
    this.updateOrderCodes();
    this.updateComboOrderDetail("add","order",newOrderID);
  }

  onOrderUpdate(order: Order)
  {
    console.log(order.id);
  }

  onToggleMixedMat(orderID: number)
  {
    this.orders[this.getOrderPostion(orderID)].isFtyMixed = !(this.orders[this.getOrderPostion(orderID)].isFtyMixed);
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
    var currIndex = 1;
    var subCount = 0;
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

      if (!value.isFtyMixed)
      {
        currIndex++;
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
        // // Update the row's combo id + 1
        // this.comboOrderDetails.forEach(detail => 
        // {
        //   //shift down 1 position
        //   if(detail.orderID >= id)
        //   {
        //     console.log(detail.orderID + ";" + detail.comboID);
        //     detail.orderID+=1;
        //   }
        // });

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

      // // Update the row's combo id - 1
      // this.comboOrderDetails.forEach(detail => 
      //   {
      //     //shift up 1 position
      //     if(detail.orderID >= id)
      //     {
      //       console.log(detail.orderID + ";" + detail.comboID);
      //       detail.orderID-=1;
      //     }
      //   });
      }
    }
  }
}
