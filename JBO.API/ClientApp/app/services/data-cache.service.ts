import { Injectable } from '@angular/core';
import { CacheObject } from '../models/cacheObject';

@Injectable()
export class DataCacheService {

  private cachedObjects: CacheObject[] = [];

  constructor() { }

  // return by name
  get(name: string) : CacheObject {
    let item = this.cachedObjects.filter(o => o.Name === name)[0];
    return item ? item : new CacheObject();
  }

  // handles the creating/updating of an item in the cache
  set(name: string, data: {}) : CacheObject {
    if (this.has(name)) {
      return this.update(name, data);
    } else {
      let item = new CacheObject();
      item.Name = name;
      item.IsDirty = false;
      item.Data = data;

      this.cachedObjects.push(item);
      return item;
    }
  }

  // delete from DataCache based on name
  delete(name: string) : void {
    if (this.get(name)) {
      let co = this.cachedObjects.filter(o => o.Name === name)[0] as CacheObject;
      this.cachedObjects.splice(this.cachedObjects.indexOf(co), 1);
    }
  }

  // update by name the data of existing
  update(name: string, data: {}): CacheObject {
    if (this.has(name)) {
      let co = this.cachedObjects.filter(o => o.Name === name)[0] as CacheObject;
      co.Data = data;
      co.IsDirty = false;

      return co;
    } else {
      return new CacheObject();
    }
  }

  // indicates if given item is in cache
  private has(name: string): boolean {
    let co = this.cachedObjects.filter(o => o.Name === name)[0];
    
    return !(typeof co === 'undefined') && co !== null;
  }

  // flag as dirty so consuming components know to refresh the data
  markDirty(name: string) : void {
    if (this.get(name)) {
      this.cachedObjects.filter(o => o.Name === name)[0].IsDirty = true;
    }
  }
}
