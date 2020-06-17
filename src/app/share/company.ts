export class Company {
    public id: number; //could be GUID in production server
    public chineseName: string;
    public englishName: string;
    
    constructor(id: number, chineseName: string, englishName: string)
    {
        this.id = id;
        this.chineseName = chineseName;
        this.englishName = englishName;
    }
  }
  