import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FoodProvider {
  Food_Api = "https://api.nal.usda.gov/ndb/reports";
  Food_Api_Key = "KAYY1aohh6AbnbtBI2FCGftUdVsXzHcmlyMA5EBW";
  constructor(public http: HttpClient) {

  }
  getFoodByName(name) {
    
    return this.http.get(this.Food_Api+'?q='+name.target.value+'&format=json&It=f&api_key='+this.Food_Api_Key);
  }
  getFoodNutrients(ndbino) {
    
    return this.http.get(this.Food_Api+'?ndbno='+ndbino+'&format=json&It=f&type=b&api_key='+this.Food_Api_Key);
  }

}
