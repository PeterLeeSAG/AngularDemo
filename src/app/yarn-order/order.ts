export interface Order {
    id: number;
    code: string;
    name: string;
    matType: number;
    isFtyMixed: boolean;
    mixRefId: number; // For referening the header record of the isFtyMixed
  }
  