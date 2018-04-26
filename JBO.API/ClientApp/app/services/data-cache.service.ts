import { Injectable } from '@angular/core';
import { CacheObject } from '../models/cacheObject';

@Injectable()
export class DataCacheService {

  private cachedObjects: CacheObject[] = new Array();

  constructor() { }

  // return by name
  get(name: string) {
    let item = this.cachedObjects.filter(o => o.Name === name)[0];
    return item ? item : new CacheObject();
  }

  // create new and add to DataCache
  add(name: string, data: {}) {
    let item = this.get(name);
    if (item.Name === '') {
      item.Name = name;
      item.IsDirty = false;
      item.Data = data;

      this.cachedObjects.push(item);
    } else {
      this.updateByName(name, data);
    }

    return this.get(name);
  }

  // delete from DataCache based on entire object
  deleteByObject(co: CacheObject) {
    if (this.get(co.Name)) {
      this.cachedObjects.splice(this.cachedObjects.indexOf(co), 1);
    }
  }

  // delete from DataCache based on name
  deleteByName(name: string) {
    if (this.get(name)) {
      let co = this.cachedObjects.filter(o => o.Name === name)[0] as CacheObject;
      this.deleteByObject(co);
    }
  }

  // flag as dirty so consuming components know to refresh the data
  markDirty(name: string) {
    if (this.get(name)) {
      this.cachedObjects.filter(o => o.Name === name)[0].IsDirty = true;
    }
  }

  // update by object the data of existing
  updateByObject(co: CacheObject, data: {}) {
    if (this.get(co.Name)) {
      let item: CacheObject = this.cachedObjects.filter(o => o.Name === co.Name)[0];
      item.Data = data;
      item.IsDirty = false;
    }
  }

  // update by name the data of existing
  updateByName(name: string, data: {}) {
    if (this.get(name)) {
      let co = this.cachedObjects.filter(o => o.Name === name)[0] as CacheObject;
      co.Data = data;
      co.IsDirty = false;
    }
  }
}
