export class Material {
    public id: number; //Could be GUID in production server
    public matName: string;
    //public matType: number; 

    // javasrcipt key value pair object
    // {"id":number,"name":string, type: number}
    constructor(id: number, matName: string, matType: number)
    {
        this.id = id;
        this.matName = matName;
        //this.matType = matType;
    }
  }
  