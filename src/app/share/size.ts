export class Size {
    public id: number; //could be GUID in production server
    public name: string;
    
    // javasrcipt key value pair object
    // {"id":number,"name":string}
    constructor(id: number, name: string)
    {
        this.id = id;
        this.name = name;
    }
  }
  