export class CacheObject {

  constructor() {
    this.Name = '';
    this.IsDirty = true;
    this.Data = new Array();
  }

  Name: string;
  IsDirty: boolean;
  Data: {};
}