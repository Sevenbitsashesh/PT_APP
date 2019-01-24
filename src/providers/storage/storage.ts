import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { DataProvider } from '../../providers/data/data';

@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient, private storage: AngularFireStorage,private dataService: DataProvider) {
    
  }
  public uploadPhoto(profilepic,location) {
    const file = 'data:image/jpg;base64,' + profilepic;
    return this.getFileRef(profilepic,location).putString(file,'data_url');  
  }
    //Generate unique uuid for Image
    private generateUUID(): any {
      let d = new Date().getTime();
      const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
    }
    getFileRef(pic, loc) {
      
      return this.storage.ref('/'+ loc +'/' + this.generateUUID() + '.jpg');
    }
    deleteFile(path) {
      this.storage.ref('data:image/jpg;base64,' + path).delete();
    }
}
