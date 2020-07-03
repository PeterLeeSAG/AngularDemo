import { Material } from './material';

export class MaterialYarn {
    public id: number; //Could be GUID in production server
    public material: Material;
    public matType: number; 
    public supplierID: number;
    public articalID: number;
    public remark: string;
    public supplierCurrID: number;
    public supplierUnitPx: number;
    public supplierWeightTypeId: number;
    public supplierTransportTypeId: number;
    public isFinalPx: boolean;
    public buyerCurrID: number;
    public buyerUnitPx: number;
    public buyerWeightType: number;

    // javasrcipt key value pair object
    // {"id":number,"name":string, type: number}
    constructor(id: number, matType: number)
    {
        this.id = id;
        this.matType = matType;
    }
  }
  