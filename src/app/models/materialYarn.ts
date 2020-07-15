import { Material } from './material';
import { Company } from './company';

export class MaterialYarn {
    public id: number; //Could be GUID in production server
    public threadCount: number;
    public material: Material;
    public matType: number; 
    public supplier: Company;
    public article: string;
    public remark: string;
    public supplierCurrID: number;
    public supplierUnitPrice: number;
    public supplierWeightType: number;
    public supplierTransportTypeId: number;
    public isFinalPrice: boolean;
    public buyerCurrID: number;
    public buyerUnitPrice: number;
    public buyerWeightType: number;

    // javasrcipt key value pair object
    // {"id":number,"name":string, type: number}
    constructor(id: number, matType: number)
    {
        this.id = id;
        this.threadCount = 0;
        this.matType = matType;
        this.remark = "";
        this.article = "";
    }

    getMaterialYarnName()
    {
        if (this.material != undefined
            && this.supplier != undefined
            && this.buyerUnitPrice !== undefined
            && this.material.name != undefined
            && this.supplier.englishName != undefined)
            {
                return this.threadCount + " " 
                + this.material.name  + " " 
                + this.supplier.englishName + " "
                + "(" + this.buyerUnitPrice.toString() + ")"
            }
        return "";
    }
  }
  