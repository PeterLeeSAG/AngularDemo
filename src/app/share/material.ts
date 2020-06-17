export class Material {
    public id: number; //Could be GUID in production server
    public name: string;
    public matType: number; 

    // javasrcipt key value pair object
    // {"id":number,"name":string, type: number}
    constructor(id: number, name: string, matType: number)
    {
        this.id = id;
        this.name = name;
        this.matType = matType;
    }
  }
  