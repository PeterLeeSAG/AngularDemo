export class ComboOrderDetail {
    comboID: number;
    orderID: number;
    materialID: number;
    colorNo: string;
    chineseColorName: string;
    englishColorName: string;
    remark: string;

    constructor(comboID: number, orderID: number)
    {
        this.comboID = comboID;
        this.orderID = orderID;
        this.materialID = 0;
        this.colorNo = "";
        this.englishColorName = "";
        this.chineseColorName = "";
        this.remark = "";
    }
  }