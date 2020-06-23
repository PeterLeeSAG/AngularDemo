export class ComboOrderDetail {
    public comboID: number;
    public orderID: number;
    public materialID: number;
    public colorNo: string;
    public chineseColorName: string;
    public englishColorName: string;
    public remark: string;

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