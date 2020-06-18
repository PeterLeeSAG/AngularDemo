export class StyleInfo {
    public factoryStyleNumber: string; //could be GUID in production server
    public calculationTypeId: number;
    
    // javasrcipt key value pair object
    // {"factoryStyleNumber":string, "calculationTypeId":number}
    constructor(factoryStyleNumber: string, calculationTypeId: number)
    {
        this.factoryStyleNumber = factoryStyleNumber;
        this.calculationTypeId = calculationTypeId;
    }
  }
  